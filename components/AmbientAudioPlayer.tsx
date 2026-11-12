"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX, Trees, Play, Sparkles } from "lucide-react";

interface Track {
  id: number;
  src: string;
  name: string;
  subtitle: string;
}

const TRACKS: Track[] = [
  {
    id: 1,
    src: "/audio/tropical-rainforest1.mp3",
    name: "Forêt Tropicale I",
    subtitle: "Pluie douce & bruissement végétal",
  },
  {
    id: 2,
    src: "/audio/tropical-rainforest2.mp3",
    name: "Forêt Tropicale II",
    subtitle: "Ruissellement & canopée vivante",
  },
  {
    id: 3,
    src: "/audio/tropical-rainforest3.mp3",
    name: "Forêt Tropicale III",
    subtitle: "Oiseaux exotiques & eau vive",
  },
  {
    id: 4,
    src: "/audio/tropical-rainforest4.mp3",
    name: "Forêt Tropicale IV",
    subtitle: "Brume tropicale & biotope sauvage",
  },
];

const TARGET_VOLUME = 0.2; // 20 % comme requis
const CROSSFADE_DURATION = 3; // 3 secondes de fondu enchaîné
const FADE_STEP_MS = 50;

export default function AmbientAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Deux éléments audio pour le crossfade sans coupure (A / B buffering)
  const audioRefA = useRef<HTMLAudioElement | null>(null);
  const audioRefB = useRef<HTMLAudioElement | null>(null);

  // Slot actif : 'A' ou 'B'
  const activeSlotRef = useRef<"A" | "B">("A");
  const currentTrackIndexRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const userPausedRef = useRef(false);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Sélection aléatoire sans répétition consécutive
  const getNextTrackIndex = useCallback((currentIndex: number): number => {
    const available = TRACKS.map((_, i) => i).filter((i) => i !== currentIndex);
    const randomIndex = Math.floor(Math.random() * available.length);
    return available[randomIndex];
  }, []);

  // Nettoyage de l'intervalle de fondu
  const clearFadeInterval = () => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
  };

  // Fondu de volume progressif
  const fadeVolume = useCallback(
    (
      audio: HTMLAudioElement,
      targetVol: number,
      durationSec: number,
      onComplete?: () => void
    ) => {
      const steps = Math.max(1, Math.round((durationSec * 1000) / FADE_STEP_MS));
      const startVol = audio.volume;
      const volDelta = (targetVol - startVol) / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const nextVol = Math.min(
          1,
          Math.max(0, startVol + volDelta * currentStep)
        );
        audio.volume = nextVol;

        if (currentStep >= steps) {
          audio.volume = targetVol;
          clearInterval(interval);
          onComplete?.();
        }
      }, FADE_STEP_MS);

      return interval;
    },
    []
  );

  // Déclencher le crossfade vers la piste suivante
  const startCrossfade = useCallback(() => {
    if (isTransitioningRef.current || userPausedRef.current) return;
    isTransitioningRef.current = true;

    const currentSlot = activeSlotRef.current;
    const currentAudio = currentSlot === "A" ? audioRefA.current : audioRefB.current;
    const nextSlot = currentSlot === "A" ? "B" : "A";
    const nextAudio = nextSlot === "A" ? audioRefA.current : audioRefB.current;

    if (!currentAudio || !nextAudio) {
      isTransitioningRef.current = false;
      return;
    }

    const nextIndex = getNextTrackIndex(currentTrackIndexRef.current);
    currentTrackIndexRef.current = nextIndex;
    setCurrentTrackIndex(nextIndex);

    // Préparer la piste suivante
    nextAudio.src = TRACKS[nextIndex].src;
    nextAudio.volume = 0;
    nextAudio.currentTime = 0;

    nextAudio
      .play()
      .then(() => {
        activeSlotRef.current = nextSlot;

        // Fade in du nouveau slot (0 -> TARGET_VOLUME)
        fadeVolume(nextAudio, TARGET_VOLUME, CROSSFADE_DURATION);

        // Fade out du slot actuel (TARGET_VOLUME -> 0)
        fadeVolume(currentAudio, 0, CROSSFADE_DURATION, () => {
          currentAudio.pause();
          currentAudio.currentTime = 0;
          isTransitioningRef.current = false;
        });
      })
      .catch((err) => {
        console.warn("Erreur transition crossfade audio:", err);
        isTransitioningRef.current = false;
      });
  }, [getNextTrackIndex, fadeVolume]);

  // Surveillance timeupdate pour anticiper la fin de piste et lancer le crossfade
  const handleTimeUpdate = useCallback(
    (e: Event) => {
      const audio = e.target as HTMLAudioElement;
      if (!audio || isTransitioningRef.current || userPausedRef.current) return;

      const timeLeft = audio.duration - audio.currentTime;
      // Démarrer le crossfade dès qu'il reste moins de CROSSFADE_DURATION secondes
      if (audio.duration > 0 && timeLeft <= CROSSFADE_DURATION && timeLeft > 0) {
        startCrossfade();
      }
    },
    [startCrossfade]
  );

  // Gestion de la fin de piste (sécurité si timeupdate n'a pas déclenché)
  const handleEnded = useCallback(() => {
    if (!isTransitioningRef.current && !userPausedRef.current) {
      startCrossfade();
    }
  }, [startCrossfade]);

  // Démarrer la lecture avec fondu doux d'entrée
  const playSound = useCallback(
    async (instant = false) => {
      const currentAudio =
        activeSlotRef.current === "A" ? audioRefA.current : audioRefB.current;
      if (!currentAudio) return;

      try {
        userPausedRef.current = false;
        if (typeof window !== "undefined") {
          sessionStorage.removeItem("canoopea_audio_paused");
        }

        if (instant) {
          currentAudio.volume = TARGET_VOLUME;
        } else {
          currentAudio.volume = 0;
        }

        await currentAudio.play();
        setIsPlaying(true);
        setAutoplayBlocked(false);

        if (!instant) {
          clearFadeInterval();
          fadeIntervalRef.current = fadeVolume(
            currentAudio,
            TARGET_VOLUME,
            1.5
          );
        }
      } catch (err) {
        console.warn("Autoplay audio bloqué par le navigateur:", err);
        setAutoplayBlocked(true);
        setIsPlaying(false);
      }
    },
    [fadeVolume]
  );

  // Mettre en pause avec fondu doux de sortie
  const pauseSound = useCallback(() => {
    const currentAudio =
      activeSlotRef.current === "A" ? audioRefA.current : audioRefB.current;
    if (!currentAudio) return;

    userPausedRef.current = true;
    if (typeof window !== "undefined") {
      sessionStorage.setItem("canoopea_audio_paused", "true");
    }

    clearFadeInterval();
    fadeIntervalRef.current = fadeVolume(currentAudio, 0, 1.0, () => {
      currentAudio.pause();
      setIsPlaying(false);
    });
  }, [fadeVolume]);

  // Bascule lecture / pause manuelle
  const togglePlay = () => {
    if (isPlaying) {
      pauseSound();
    } else {
      playSound(false);
    }
  };

  // Initialisation au montage du composant
  useEffect(() => {
    const audioA = audioRefA.current;
    const audioB = audioRefB.current;
    if (!audioA || !audioB) return;

    // Attachement des écouteurs
    audioA.addEventListener("timeupdate", handleTimeUpdate);
    audioA.addEventListener("ended", handleEnded);
    audioB.addEventListener("timeupdate", handleTimeUpdate);
    audioB.addEventListener("ended", handleEnded);

    // Choix aléatoire initial de la piste
    const initialIndex = Math.floor(Math.random() * TRACKS.length);
    currentTrackIndexRef.current = initialIndex;
    setCurrentTrackIndex(initialIndex);

    audioA.src = TRACKS[initialIndex].src;
    audioA.volume = 0;
    activeSlotRef.current = "A";

    // Vérifier si l'utilisateur avait manuellement mis en pause
    const wasPausedByUser =
      typeof window !== "undefined" &&
      sessionStorage.getItem("canoopea_audio_paused") === "true";

    if (!wasPausedByUser) {
      // Tentative de lecture automatique (AUTOPLAY) au chargement
      audioA
        .play()
        .then(() => {
          setIsPlaying(true);
          setAutoplayBlocked(false);
          // Fondu d'entrée doux jusqu'à 20%
          fadeIntervalRef.current = fadeVolume(audioA, TARGET_VOLUME, 2.0);
        })
        .catch(() => {
          // Autoplay bloqué par la politique du navigateur : mise en place du secours à la première interaction
          setAutoplayBlocked(true);

          const handleFirstInteraction = () => {
            if (!userPausedRef.current) {
              playSound(false);
            }
            cleanupListeners();
          };

          const cleanupListeners = () => {
            window.removeEventListener("pointerdown", handleFirstInteraction);
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("keydown", handleFirstInteraction);
            window.removeEventListener("scroll", handleFirstInteraction);
          };

          window.addEventListener("pointerdown", handleFirstInteraction, {
            once: true,
            passive: true,
          });
          window.addEventListener("click", handleFirstInteraction, {
            once: true,
            passive: true,
          });
          window.addEventListener("keydown", handleFirstInteraction, {
            once: true,
            passive: true,
          });
          window.addEventListener("scroll", handleFirstInteraction, {
            once: true,
            passive: true,
          });
        });
    }

    return () => {
      audioA.removeEventListener("timeupdate", handleTimeUpdate);
      audioA.removeEventListener("ended", handleEnded);
      audioB.removeEventListener("timeupdate", handleTimeUpdate);
      audioB.removeEventListener("ended", handleEnded);
      clearFadeInterval();
    };
  }, [handleTimeUpdate, handleEnded, playSound, fadeVolume]);

  const currentTrack = TRACKS[currentTrackIndex];

  return (
    <>
      {/* Deux éléments audio cachés pour le crossfade continu */}
      <audio
        ref={audioRefA}
        preload="metadata"
        className="hidden"
        aria-hidden="true"
      />
      <audio
        ref={audioRefB}
        preload="metadata"
        className="hidden"
        aria-hidden="true"
      />

      {/* Widget flottant discret en bas à droite */}
      <div
        className="fixed bottom-6 right-6 z-50 flex items-center select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Bulle d'incitation si l'autoplay a été temporairement restreint par le navigateur */}
        {autoplayBlocked && !isPlaying && (
          <button
            onClick={() => playSound(false)}
            className="mr-3 animate-bounce hidden md:flex items-center gap-2 bg-[#18532c] text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-xl border border-emerald-400/40 hover:bg-[#124222] transition-colors"
            title="Activer l'ambiance sonore"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-300 animate-spin" />
            <span>Activer l'ambiance tropicale</span>
          </button>
        )}

        <button
          onClick={togglePlay}
          aria-label={
            isPlaying
              ? "Couper l'ambiance sonore de forêt tropicale"
              : "Activer l'ambiance sonore de forêt tropicale (ruissellement & canopée)"
          }
          className={`group relative flex items-center justify-center gap-2.5 rounded-full p-3 sm:px-4 sm:py-2.5 transition-all duration-300 shadow-xl backdrop-blur-md ${
            isPlaying
              ? "bg-[#18532c]/95 hover:bg-[#124222] text-white ring-2 ring-[#38b259]/50 shadow-emerald-950/40"
              : "bg-white/95 hover:bg-white text-gray-800 hover:text-[#18532c] border border-gray-200/90 shadow-gray-400/30"
          }`}
        >
          {/* Signal lumineux pulsant lors de la lecture */}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22c55e]"></span>
            </span>
          )}

          {/* Icône animée */}
          <div className="relative flex items-center justify-center">
            {isPlaying ? (
              <div className="flex items-center gap-1.5">
                <Volume2 className="h-5 w-5 text-[#86efac]" />
                {/* Micro-égaliseur naturel animé */}
                <span className="flex items-end gap-0.5 h-3.5">
                  <span className="w-0.5 bg-[#86efac] rounded-full animate-pulse h-2"></span>
                  <span className="w-0.5 bg-[#86efac] rounded-full animate-bounce h-3.5"></span>
                  <span className="w-0.5 bg-[#86efac] rounded-full animate-pulse h-2.5"></span>
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-gray-500 group-hover:text-[#18532c] transition-colors">
                <VolumeX className="h-5 w-5" />
                <Trees className="h-3.5 w-3.5 opacity-60" />
              </div>
            )}
          </div>

          {/* Informations textuelles : masqué sur mobile (hidden sm:flex), visible sur écran moyen et large */}
          <div className="hidden sm:flex flex-col text-left leading-tight pr-1 max-w-[170px]">
            <span className="text-xs font-bold tracking-tight text-current truncate">
              {isPlaying ? currentTrack.name : "Ambiance Forêt"}
            </span>
            <span
              className={`text-[10px] tracking-wide font-medium truncate ${
                isPlaying
                  ? "text-[#86efac]"
                  : "text-gray-400 group-hover:text-gray-600"
              }`}
            >
              {isPlaying ? "Nature & Ruissellement (20%)" : "Désactivée • Cliquer"}
            </span>
          </div>
        </button>

        {/* Info-bulle détaillée au survol */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 px-3.5 py-2 bg-gray-900/95 text-white text-xs rounded-xl shadow-2xl whitespace-nowrap pointer-events-none animate-fadeIn backdrop-blur-md border border-gray-700/50">
            <div className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-0.5">
              <Trees className="h-3.5 w-3.5" />
              <span>{currentTrack.name} (Volume 20 %)</span>
            </div>
            <p className="text-[11px] text-gray-300">
              {isPlaying
                ? `${currentTrack.subtitle} • Fondu enchaîné continu`
                : "Cliquez pour démarrer l'ambiance sonore naturelle"}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
