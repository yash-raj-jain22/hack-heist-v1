# HACKHEIST 2026 // Landing Page

Flagship Collegiate Hackathon Landing Page for **GDG on Campus MIET** (Google Developer Groups). Built with **React + Vite + CSS + JavaScript**.

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 🎨 Visual Direction & Aesthetics

- **Cyber-Heist Palette**: Deep charcoal and black foundation (`#050705`, `#0a0e0a`) punctuated with high-contrast, restrained neon-green accents (`#00ff66`).
- **Typography Matrix**:
  - **Main Display**: `Space Grotesk` — bold, commanding, futuristic title typography.
  - **Technical / Labels**: `JetBrains Mono` — terminal commands, coordinates, dates, and status codes.
  - **Body / Prose**: `Inter` — crystal-clear readability across all devices.
- **Terminal Aesthetics**: Subtle ambient grid lines, terminal status bars, system badges, dossier briefing layout, and syndicate access passes.

---

## 🚀 Sections & Features

1. **Cyber Navbar (`Navbar.jsx`)**:
   - GDG on Campus MIET branding badge.
   - Smooth in-page navigation links (`About`, `Highlights`, `Details`, `FAQ`).
   - Responsive slide-out mobile drawer with blur backdrop and accessible keyboard controls.
   - Instant "REGISTER" CTA button.

2. **Hero Terminal (`Hero.jsx`)**:
   - `HACKHEIST` display title with staggered entrance animation.
   - Tagline: *"Break the code. Steal the spotlight. Build the future."*
   - Organizer attribution: **GDG on Campus MIET**.
   - Event Date: **March 27 – 28, 2026**.
   - Timing: **9:00 AM Onwards**.
   - Venue: **MIET Meerut Campus (Auditorium & Innovation Labs)**.
   - Live countdown timer to the vault breach.
   - Primary and secondary tactical CTA buttons.

3. **About Dossier (`About.jsx`)**:
   - Event mission statement formatted as an operative briefing dossier.
   - Live metrics grid: 24+ Hours, ₹1.5L Bounty Pool, 500+ Operatives, 4 Core Tracks.
   - 3 Operative Pillars: Mentorship, Syndicates, and Production-Ready criteria.

4. **Event Highlights (`Highlights.jsx`)**:
   - **The Hackathon**: 24-Hour Code Infiltration Sprint.
   - **Hands-on Workshops**: Tactical Tooling & Technical Mastery.
   - **Tech Sessions**: Keynotes & Fireside Intel from Leaders.
   - **Community & Networking**: Forge Alliances & Connect with Recruiters.
   - Interactive cards with hover lifts, glowing border transitions, and terminal commands.

5. **Event Details & Schedule (`Details.jsx`)**:
   - Date, 9:00 AM Onwards, and MIET Meerut Venue summary cards.
   - Interactive Day 01 & Day 02 timeline schedule tabs.
   - Facility amenities dossier (Gigabit Wi-Fi, Dedicated Power Drops, Fuel & Catering, Rest areas).

6. **Rules & FAQ Accordion (`FAQ.jsx`)**:
   - Eligibility, team composition (2-4 operatives), free entry, hardware policies, and beginner assistance.

7. **Final CTA (`FinalCTA.jsx`)**:
   - "Ready to HackHeist?" vault breach callout with instant registration trigger.

8. **Operative Registration Modal (`RegistrationModal.jsx`)**:
   - Frontend form with field validation.
   - Generates a personalized Digital Operative Pass (`HH26-VAULT-XXXX`) with copyable ID.

9. **Desktop Cursor Glow (`CursorGlow.jsx`)**:
   - Subtle radial glow tracking pointer position via `requestAnimationFrame`.
   - Automatically disabled on touch screens and when `prefers-reduced-motion` is active.

---

## 📱 Responsive Testing Coverage

The layout is tested and optimized across all required viewports:
- `360px` & `390px`: Small mobile screens (single column, adaptive typography, mobile drawer).
- `768px`: Tablet portrait (2-column grids, streamlined navigation).
- `1024px`: Tablet landscape / small laptop.
- `1366px`: Standard laptop / desktop.
- `1920px`: Full HD / ultra-wide monitors (contained max-width, balanced spacing).

---

## ♿ Accessibility & Motion Preferences

- **Reduced Motion**: Full support for `@media (prefers-reduced-motion: reduce)` — disables non-essential animations, eliminates transitions, and defaults reveals immediately.
- **Keyboard Navigation**: All interactive elements have clear `:focus-visible` neon outline rings.
- **Semantic HTML**: Proper `header`, `nav`, `main`, `section`, `footer`, and ARIA roles throughout.
