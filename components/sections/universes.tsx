import { Waves, Trees, Dog, Bird, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Universes() {
  const universes = [
    {
      id: "aquariophilie",
      title: "Aquariophilie & Aquascaping",
      description:
        "Cuves ultra-clear, sols techniques, engrais, fertilisation CO2 et sélection de plantes aquatiques in vitro.",
      icon: Waves,
      tag: "Spécialité N°1",
      color: "from-blue-500/10 to-teal-500/10 text-teal-600 dark:text-teal-400",
    },
    {
      id: "terrariophilie",
      title: "Terrariophilie & Paludariums",
      description:
        "Équipements pour reptiles et amphibiens : brumisation, éclairage UVB, substrats tropicaux et décors naturels.",
      icon: Trees,
      tag: "Biotopes",
      color: "from-emerald-500/10 to-lime-500/10 text-emerald-600 dark:text-emerald-400",
    },
    {
      id: "chiens-chats",
      title: "Chiens & Chats",
      description:
        "Alimentation saine, friandises naturelles, soins d’hygiène, sellerie et accessoires d'enrichissement quotidien.",
      icon: Dog,
      tag: "Bien-être",
      color: "from-amber-500/10 to-orange-500/10 text-amber-600 dark:text-amber-400",
    },
    {
      id: "rongeurs-oiseaux",
      title: "Petits Animaux & Oiseaux",
      description:
        "Habitats spacieux, litières dépoussiérées, alimentation spécifique et jouets adaptés aux espèces.",
      icon: Bird,
      tag: "Habitat",
      color: "from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400",
    },
  ];

  return (
    <section className="py-20 bg-muted/20 border-t border-border/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nos Univers Passion
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Explorez nos catégories phares conçues pour le bien-être de vos animaux
            et l&apos;aménagement de biotopes d&apos;exception.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {universes.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/40"
              >
                <div>
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} mb-5`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-medium text-primary">
                  <span>Découvrir l&apos;univers</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
