"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  ExternalLink,
  HelpCircle,
  ShoppingBag,
} from "lucide-react";
import { CATALOG, processUserQuery, ProductRecommendation } from "./knowledge-base";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  clarifications?: string[];
  recommendations?: ProductRecommendation[];
  timestamp: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Bonjour ! 🌿 Je suis **CanooBot**, votre conseiller expert chez **Canoopea**.\n\nQue vous cherchiez à créer un **aquarium planté**, équiper un **terrarium tropical** ou trouver la **meilleure alimentation pour votre animal**, je suis là pour vous orienter vers les bons produits !",
      clarifications: [
        "Conseil pour créer un aquarium biotope",
        "Équiper un terrarium tropical",
        "Croquettes de qualité pour chien",
        "Délais et frais de livraison",
      ],
      recommendations: CATALOG.slice(0, 2),
      timestamp: "À l'instant",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Défilement automatique vers le bas à chaque nouveau message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
      setHasInteracted(true);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    // Simulation d'un temps de réflexion naturel (500-750ms)
    setTimeout(() => {
      const reply = processUserQuery(query, messages.length);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: reply.text,
        clarifications: reply.clarifications,
        recommendations: reply.recommendations,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: "bot",
        text: "Conversation réinitialisée. Comment puis-je vous aider aujourd'hui ? 🌿",
        clarifications: [
          "Conseil pour créer un aquarium biotope",
          "Équiper un terrarium tropical",
          "Croquettes de qualité pour chien",
          "Délais et frais de livraison",
        ],
        recommendations: CATALOG.slice(0, 2),
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  return (
    <>
      {/* 1. Bouton flottant déclencheur en bas à gauche */}
      <div className="fixed bottom-6 left-6 z-50 select-none">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Ouvrir le conseiller virtuel Canoopea"
            className="group relative flex items-center gap-2.5 bg-[#18532c] hover:bg-[#124222] text-white px-4 py-3 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-950/40 border border-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {/* Pastille de notification animée si non lu */}
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#249e3f] text-[10px] font-bold text-white items-center justify-center">
                  {unreadCount}
                </span>
              </span>
            )}

            <div className="relative flex items-center justify-center">
              <Bot className="h-5 w-5 text-emerald-300 group-hover:rotate-12 transition-transform" />
            </div>

            <div className="hidden sm:flex flex-col text-left leading-tight pr-1">
              <span className="text-xs font-bold tracking-tight">Conseiller Virtuel</span>
              <span className="text-[10px] text-emerald-300 font-medium">En ligne • Poser une question</span>
            </div>
          </button>
        )}
      </div>

      {/* 2. Fenêtre modale de Chat */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Discussion avec CanooBot"
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] md:w-[430px] h-[580px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-gray-200/90 flex flex-col overflow-hidden animate-fadeIn backdrop-blur-xl"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#18532c] via-[#1b5e32] to-[#144725] text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                <Bot className="h-6 w-6 text-emerald-300" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#22c55e] ring-2 ring-[#18532c]" />
              </div>
              <div className="flex flex-col leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-sm tracking-wide">CanooBot</span>
                  <span className="bg-emerald-500/20 text-emerald-200 text-[10px] font-bold px-1.5 py-0.2 rounded border border-emerald-400/30">
                    Expert
                  </span>
                </div>
                <span className="text-[11px] text-emerald-200/90 font-medium">
                  Conseils Biotopes, Matériel & Soins
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                title="Recommencer la discussion"
                className="p-1.5 text-emerald-200 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Réinitialiser le chat"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Fermer"
                className="p-1.5 text-emerald-200 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Fermer le chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Corps des messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/60 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl p-3.5 shadow-xs leading-relaxed whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-[#18532c] text-white rounded-br-none"
                      : "bg-white text-gray-900 border border-gray-200/80 rounded-bl-none shadow-sm"
                  }`}
                >
                  {/* Mise en forme basique gras */}
                  {msg.text.split("\n").map((line, idx) => (
                    <p key={idx} className={idx > 0 ? "mt-1.5" : ""}>
                      {line}
                    </p>
                  ))}

                  {/* Recommandations de produits associées */}
                  {msg.recommendations && msg.recommendations.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                      <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                        <ShoppingBag className="h-3 w-3 text-[#249e3f]" />
                        Produits recommandés :
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {msg.recommendations.map((prod) => (
                          <Link
                            key={prod.id}
                            href={prod.href}
                            onClick={() => setIsOpen(false)}
                            className="group/prod flex items-center gap-2.5 p-2 rounded-xl bg-gray-50 hover:bg-emerald-50/50 border border-gray-200/80 hover:border-[#249e3f]/50 transition-all shadow-2xs"
                          >
                            <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-white border border-gray-200 flex-shrink-0 flex items-center justify-center">
                              <Image
                                src={prod.image}
                                alt={prod.name}
                                width={44}
                                height={44}
                                className="object-contain max-h-full max-w-full p-0.5 mix-blend-multiply group-hover/prod:scale-105 transition-transform"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs font-bold text-gray-900 group-hover/prod:text-[#18532c] truncate">
                                {prod.name}
                              </h4>
                              <p className="text-[10px] text-gray-400 truncate">{prod.brand}</p>
                              <span className="text-xs font-extrabold text-[#e65100]">
                                {prod.price}
                              </span>
                            </div>
                            <ExternalLink className="h-3.5 w-3.5 text-gray-400 group-hover/prod:text-[#249e3f] flex-shrink-0 mr-1" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Suggestions / Questions de clarification sous le message du bot */}
                {msg.clarifications && msg.clarifications.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5 max-w-[92%]">
                    {msg.clarifications.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(item)}
                        className="text-[11px] font-semibold bg-white hover:bg-emerald-50 text-emerald-900 hover:text-emerald-950 border border-emerald-200 hover:border-emerald-400 px-3 py-1.5 rounded-full transition-all text-left shadow-2xs"
                      >
                        👉 {item}
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-[9px] text-gray-400 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Indicateur de frappe */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 bg-white border border-gray-200 rounded-2xl rounded-bl-none w-fit text-gray-400 shadow-sm">
                <Bot className="h-3.5 w-3.5 text-emerald-600 animate-pulse" />
                <span className="text-[11px] font-medium text-gray-500">CanooBot réfléchit</span>
                <span className="flex items-center gap-1 ml-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.4s]"></span>
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Pied avec formulaire de saisie */}
          <div className="p-3 bg-white border-t border-gray-100 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Posez votre question (ex: quel filtre pour 100L ?)..."
                className="flex-1 text-xs sm:text-sm bg-gray-100/80 hover:bg-gray-100 focus:bg-white text-gray-800 rounded-full px-4 py-2.5 border border-transparent focus:border-[#249e3f] focus:outline-none transition-all placeholder:text-gray-400"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                aria-label="Envoyer"
                className="bg-[#18532c] hover:bg-[#124222] disabled:opacity-40 disabled:hover:bg-[#18532c] text-white p-2.5 rounded-full shadow-md transition-all flex items-center justify-center flex-shrink-0"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center justify-between text-[10px] text-gray-400 px-2">
              <span>Canoopea • Spécialiste Biotopes & Animaux</span>
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                <Sparkles className="h-2.5 w-2.5" />
                Conseils personnalisés
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
