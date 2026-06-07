# VISHVANTH S — Software Engineer Portfolio

A dark-themed personal portfolio website for **VISHVANTH S** — Software Engineer (WEB and APP developer). Focused on front-end development, mobile app development (Flutter), UI/UX design, and AI-assisted workflows.

Built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**. Designed for one-click deployment on **Vercel**.

## Stack

- React 18 / TypeScript
- Vite (build tool)
- Tailwind CSS (utility-first styling)
- Framer Motion (animations + scroll effects)
- Lucide React (icons)
- Kanit font (Google Fonts, weights 300–900)

## Sections

1. **Hero** — Immersive background video (`intro.mp4`) that unmutes on user interaction, tagline, navigation bar.
2. **About** — Bio, languages spoken, timeline-driven education pathway.
3. **Education** — Glowing vertical timeline linking Vellore Institute of Technology, Velammal Bodhi Campus, and Vidya Mandir School.
4. **Services** — Web Development, App Development, UI/UX Design.
5. **Projects** — Sticky-stacking card showcases:
   - **SecureCity** (Mobile App Development): Flutter application for urban safety, including live map tracking, emergency SOS support, and a pet adoption portal. Features horizontal mobile screens, direct APK downloads (`securecity.apk`), and github repository buttons.
   - **Smart Classroom** (Web Platform): Attendance scanner management platform with anti-proxy QR codes. Linked to live deployment on Render and GitHub repo.
6. **Certifications** — Google AI Professional Certificate, Network Basics (Cisco), IoT (Cisco), AI Tools Workshop (B10x).
7. **Contact** — Email, WhatsApp, LinkedIn, GitHub.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → /dist
npm run preview  # serve /dist locally
```

## Deploy to Vercel

Push to GitHub → import the repo at [vercel.com/new](https://vercel.com/new) → click Deploy. No environment variables needed.

## Project structure

```
src/
├── App.tsx                    # composes all sections
├── main.tsx                   # React entry
├── index.css                  # global styles + .hero-heading gradient
└── components/
    ├── HeroSection.tsx        # navbar, background video overlay, taglines
    ├── AboutSection.tsx       # bio, animated text, skills grid
    ├── EducationSection.tsx   # glowing vertical education timeline
    ├── ServicesSection.tsx    # white section, custom services
    ├── ProjectsSection.tsx    # sticky-stacking project cards
    ├── CertificationsSection.tsx # grid of credentials with descriptions
    ├── ContactSection.tsx     # contact channels with custom SVG icons
    │
    ├── ContactButton.tsx      # gradient pill CTA
    ├── LiveProjectButton.tsx  # ghost outline pill
    ├── FadeIn.tsx             # whileInView animation wrapper
    ├── Magnet.tsx             # mouse-following magnetic hover
    └── AnimatedText.tsx       # char-by-char scroll-driven reveal
```

## Featured projects

| Project | Live Website / Build | Source Code (GitHub) |
|---|---|---|
| SecureCity | `/securecity.apk` (Download APK) | [github.com/Vishva-57/SecureCity](https://github.com/Vishva-57/SecureCity) |
| Smart Classroom | [smart-classroom-system-etvl.onrender.com](https://smart-classroom-system-etvl.onrender.com/) | [github.com/Vishva-57/Smart-Classroom-System](https://github.com/Vishva-57/Smart-Classroom-System) |

## Credits

Designed & built by **VISHVANTH S** · [LinkedIn](https://www.linkedin.com/in/vishvanth-s-50153v) · [GitHub](https://github.com/Vishva-57)
