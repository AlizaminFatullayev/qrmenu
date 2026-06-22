# Aytala QR Menu

QR restaurant menu functionality built with React, Vite, Tailwind CSS, and i18next.

The menu data was extracted from `/Users/alizamin/Desktop/aytala menu.pdf` and converted into `src/data/menu.json`. Every item has Azerbaijani/Russian names, pricing, category data, and an `image` URL. Real non-AI food photos were sourced from Wikimedia/Wikipedia media, downloaded into `public/images/menu/`, and copied into `dist/images/menu/` during build.

## Folder Structure

```text
src/
├── assets/
│   └── menu/
├── components/
├── data/
├── hooks/
├── pages/
├── translations/
├── utils/
├── App.jsx
├── index.css
└── main.jsx
```

## Installation

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

The build output is generated in `dist/`.

## Netlify Deployment

1. Push this project to a Git repository.
2. Create a new Netlify site from the repository.
3. Netlify will read `netlify.toml`.
4. Build command: `npm run build`.
5. Publish directory: `dist`.

## Vercel Deployment

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Vercel will read `vercel.json`.
4. Framework preset: Vite.
5. Build command: `npm run build`.
6. Output directory: `dist`.
