# Canoopea Web - Refonte Moderne

Bienvenue sur le projet de refonte du site **[canoopea.com](https://canoopea.com)**.

## 🌿 Stack Technique

- **Framework** : [Next.js](https://nextjs.org/) (App Router, React 18/19)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styles** : [Tailwind CSS](https://tailwindcss.com/) avec plugins d'animation
- **UI & Animations** : Préparé pour [Magic UI](https://magicui.design/) et composants style shadcn/ui
- **Icônes** : [Lucide React](https://lucide.dev/)

---

## 🚀 Démarrage Rapide

1. **Installer les dépendances** :
   ```bash
   npm install
   # ou pnpm install / yarn / bun install
   ```

2. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```

3. **Ouvrir le navigateur** :
   Rendez-vous sur [http://localhost:3000](http://localhost:3000).

---

## 📁 Structure du Projet

```text
canoopea-web/
├── app/                  # Next.js App Router (pages, layout, styles globaux)
│   ├── globals.css       # Variables de thème HSL et directives Tailwind
│   ├── layout.tsx        # Layout racine avec Navbar, Footer et SEO
│   └── page.tsx          # Page d'accueil moderne
├── components/           # Composants React
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, Universes, etc.
│   └── ui/               # Boutons, badges, composants Magic UI
├── lib/                  # Utilitaires (cn, formateurs, helpers)
│   └── utils.ts
├── public/               # Assets statiques, images, favicons
├── CLAUDE.md             # Guide de contexte & règles pour l'assistant IA
├── package.json          # Dépendances & scripts
├── tailwind.config.js    # Configuration Tailwind + keyframes Magic UI
└── tsconfig.json         # Configuration TypeScript
```

---

## ✨ Ajouter des composants Magic UI

Le fichier `tailwind.config.js` est déjà configuré avec les keyframes et animations nécessaires (Marquee, Border Beam, Ripple, Orbit, Shimmer, etc.) et le helper `cn()` est disponible dans `@/lib/utils`.

Exemple pour ajouter un composant Magic UI :
```bash
npx shadcn@latest add "https://magicui.design/r/marquee"
```
ou copier directement le code du composant dans `components/ui/`.
