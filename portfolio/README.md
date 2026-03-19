This is a modern developer portfolio for Akhil Senthil, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio locally.

## Highlights

- Futuristic dark UI with glassmorphism, neon accents, and animated section reveals
- Hero section with a Three.js particle network and terminal-style intro card
- Featured project filtering across AI, ML, and Systems work
- Coding profiles, GitHub contribution graph, contact form, and resume download

## Build

Use the production checks before deployment:

```bash
npm run lint
npm run build
```

The app is configured for static export, which makes Vercel deployment straightforward.

## Deploy To Vercel

1. Push this project to GitHub.
2. Import the repo into Vercel.
3. Keep the detected framework as `Next.js`.
4. Deploy with the default settings.

`npm run build` generates the static site in `out/`, which Vercel will serve automatically.
