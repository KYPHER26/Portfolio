# KYPHER — Developer Portfolio

A premium, dark, futuristic developer/cybersecurity portfolio built with
React, Vite, TypeScript, Tailwind CSS and Framer Motion.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- Formspree (contact form)
- Firebase (optional, not wired up yet — see below)

## Getting started

```bash
npm install
npm run dev       # starts a local dev server (usually http://localhost:5173)
```

Other commands:

```bash
npm run build      # type-checks and builds a production bundle into /dist
npm run preview     # serves the production build locally to sanity-check it
npm run lint        # runs ESLint
```

## Where to edit content

Everything you'll want to change lives in `src/data/`, not in the
components themselves:

| File | What it controls |
|---|---|
| `src/data/config.ts` | Name, tagline, bio, focus, email, phone, WhatsApp link, GitHub username, social links, About stats, Formspree endpoint, nav links |
| `src/data/skills.ts` | Skills grouped by category, each with a level (`Learning` / `Comfortable` / `Advanced`) |
| `src/data/services.ts` | The 6 service cards (title, description, icon) |
| `src/data/projects.ts` | **The projects grid.** Add/remove a project by editing this array — the UI updates automatically. Leave `githubUrl` / `liveUrl` out entirely (don't set them to `""`) to hide that button. `status` is `"Live"` or `"In Development"`. |
| `src/data/experience.ts` | Work experience timeline — currently empty, add entries as you gain experience |
| `src/data/education.ts` | Education timeline — has 4 blank placeholder entries (Primary, Secondary, Advanced Level, University Degree) ready for you to fill in `institution`, `program`, `year` |
| `src/data/certificates.ts` | Certificates — currently empty, add entries as you earn them |
| `src/data/techMarquee.ts` | The scrolling technology names in the marquee band |

### Things you'll want to replace

- **Profile photo**: `src/components/About/About.tsx` currently shows a
  placeholder "K" monogram. Drop a photo at `public/profile.jpg` and swap
  in an `<img src="/profile.jpg" ... />`.
- **Open Graph image**: reference to `/og-image.png` in `index.html` — add
  a real 1200×630 image at `public/og-image.png`.
- **Canonical/OG URLs**: `index.html` currently uses `https://kypher26.dev/`
  as a placeholder domain — update once you have a custom domain (or
  your Vercel URL).
- **WhatsApp link**: `src/data/config.ts` builds the link as
  `https://wa.me/255658004446` from your number — double-check the
  country code prefix is correct before publishing.
- **Visionnest Family project**: currently a placeholder entry in
  `src/data/projects.ts` since the details were unavailable — fill in
  the description, technologies, and links once you have them.
- **Cloud Bot / Expense Tracker**: marked `"In Development"` with no
  links — update `status` to `"Live"` and add `liveUrl`/`githubUrl` once
  ready.

## Contact form

The contact form posts directly to your Formspree endpoint
(`FORMSPREE_ENDPOINT` in `src/data/config.ts`) — no backend needed.
Submissions will show up in your Formspree dashboard and be emailed to
whatever address you registered there.

## GitHub section

The GitHub section fetches your public repositories live from GitHub's
public REST API (`api.github.com/users/KYPHER26/repos`) — no token or
credentials required, and none are exposed client-side. It shows a
loading skeleton, then repo cards, and falls back to a link to your
profile if the API call fails.

## Optional: Firebase

`src/lib/firebase.ts` is a ready-to-use Firebase initializer, but it's
**not imported anywhere yet** — the site works fully without it. If you
later want an admin dashboard to edit projects/skills, or to store
contact messages in Firestore instead of Formspree:

1. Create a Firebase project and enable the services you need
   (Firestore / Auth).
2. Copy `.env.example` to `.env` and fill in your Firebase web config.
3. Import `db` / `auth` from `@/lib/firebase` wherever you need them.

`.env` is already git-ignored.

## Deployment

### Vercel (recommended — matches your existing setup)

1. Push this project to a GitHub repo.
2. Go to vercel.com → **New Project** → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output
   directory `dist` (Vercel usually detects these automatically).
4. Deploy. You'll get a `*.vercel.app` URL, and can attach a custom
   domain afterward in Project Settings → Domains.

### Netlify

1. Push to GitHub.
2. netlify.com → **Add new site** → import the repo.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy.

### GitHub Pages

GitHub Pages needs a static export with the right base path — if you
want this route instead of Vercel/Netlify, let me know and I'll wire up
`vite.config.ts`'s `base` option and a deploy workflow for it.

## Project structure

```
src/
├── assets/
├── components/
│   ├── Navbar/       Hero/        About/        Skills/
│   ├── Services/     Projects/    Experience/    Education/
│   ├── Certificates/ TechMarquee/ GitHubSection/ Contact/
│   ├── Footer/       shared/      (Reveal, SectionHeading)
├── data/              ← edit content here
├── lib/               firebase.ts (optional)
├── types/             shared TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css
```
