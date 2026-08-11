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
   - **SecureCity** (Mobile App Development): Flutter application for urban safety.
   - **Smart Classroom** (Web Platform): Attendance management platform with anti-proxy QR codes.
   - **Basilisk Blind Spot** (AI Web Platform): Web accessibility auditing platform against WCAG standards.
   - **Crisis Alert System** (Crisis & Incident Management): Real-time emergency dispatch and campus incident response platform.
6. **Certifications** — Google AI Professional Certificate, Google Cybersecurity Professional, Google Cloud Generative AI Leader, Network Basics, IoT, AI Tools Workshop.
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
| Basilisk Blind Spot | [basiliskblindspot.netlify.app](https://basiliskblindspot.netlify.app/) | [github.com/Vishva-57/Basilisk-Blind-Spot](https://github.com/Vishva-57/Basilisk-Blind-Spot/) |
| Crisis Alert System | [crisis-alert-system-iota.vercel.app](https://crisis-alert-system-iota.vercel.app/) | [github.com/Vishva-57/Crisis_Alert_System](https://github.com/Vishva-57/Crisis_Alert_System) |

## Credits

Designed & built by **VISHVANTH S** · [LinkedIn](https://www.linkedin.com/in/vishvanth-s-50153v) · [GitHub](https://github.com/Vishva-57)
