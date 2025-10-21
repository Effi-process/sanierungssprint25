# Sanierungssprint25 – Eleganter One-Pager

> **Ihr Haus komplett saniert. In nur 25 Tagen.**

Ein **ruhiger**, **hochwertiger** One-Pager mit **klarer Typografie**, **luftigem Layout** und **dezenten Micro-Animationen**. Fokus auf **Eleganz** und **Einfachheit** statt Effekthascherei.

---

## Tech-Stack

* **Next.js 15.x** (App Router) · **React 19** kompatibel
* **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, **lucide-react**, **Framer Motion**
* Dev: **Turbopack** (stabil in Next.js 15)
* Deployment: **Vercel** (empfohlen)

---

## Schnellstart

```bash
# Dependencies installieren
npm install

# Development Server starten (mit Turbopack)
npm run dev

# Production Build erstellen
npm run build

# Production Server lokal testen
npm start

# Code Quality prüfen
npm run lint
npm run typecheck
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

---

## Farbpalette

Die Farbpalette reflektiert die **Professionalität** und **Dynamik** einer 25-Tage-Sanierung:

* **Primary (Architektenschwarz)** – `#1A1D1F`
  Headlines, Navigation, wichtige Texte

* **Accent (Baustellen-Orange)** – `#FF6B35`
  CTAs, Highlights, Sprint-Energie

* **Supporting (Beton-Grau)** – `#E8E9EB`
  Cards, Sections, neutrale Hintergründe

* **Highlight (Frisches Mint)** – `#4ECDC4`
  Success-States, Icons, Erneuerungs-Gefühl

**Designphilosophie:** Baustellendynamik trifft auf cleane Eleganz – vertrauenswürdig, modern, energiegeladen.

---

## Designprinzipien

* **Elegant:** dezente Farben, sanfte Schatten, großzügiger Weißraum.
* **Simpel:** wenige Sektionen, klare Botschaften, kurze Texte.
* **Ästhetisch:** saubere Typografie, ruhige Animationen (180–240ms), konsistente Abstände.

---

## Struktur (App Router)

```
/app
  /layout.tsx        # Root Layout, Fonts, Metadata
  /page.tsx          # One-Pager (Hero, Benefits, Process, Contact)
  /globals.css       # Tailwind CSS v4 + Design Tokens
/components
  /ui
    /button.tsx      # Button Varianten (Primary, Ghost, Link)
    /card.tsx        # Card Komponenten
  /section.tsx       # Section & SectionHeader
/lib
  /utils.ts          # cn() Utility (clsx + tailwind-merge)
```

---

## One-Pager Sections

1. **Hero** – Hauptbotschaft, primärer & sekundärer CTA
2. **Vorteile** – 3 Benefit-Cards (Garantie, Alles aus einer Hand, Qualität)
3. **Prozess** – 4-Schritte-Timeline (Erstgespräch → Planung → Umsetzung → Übergabe)
4. **Kontakt** – Kontaktformular + Info-Cards (Telefon, E-Mail, Standort)
5. **Footer** – Navigation, Rechtliches, Copyright

---

## Skripte

| Befehl | Beschreibung |
|--------|--------------|
| `npm run dev` | Lokale Entwicklung mit Turbopack |
| `npm run build` | Produktion Build (Turbopack) |
| `npm start` | Produktion lokal testen |
| `npm run lint` | ESLint ausführen |
| `npm run typecheck` | TypeScript prüfen |

---

## Zugänglichkeit & Performance

* **A11y:** WCAG 2.1 AA Ziele, semantisches HTML, Fokus-Ringe sichtbar, sinnvolle Labels
* **Performance:** LCP < 1.8s, CLS < 0.1, Fonts optimiert (display: swap), Bilder via `next/image`
* **Motion:** `prefers-reduced-motion` wird respektiert

---

## SEO

* **Metadata API** (Next.js App Router)
* Open Graph & Twitter Cards
* Klare Titles & Descriptions
* Sitemap/Robots (automatisch via Next.js)

---

## Sicherheit

* Input-Validierung client- und serverseitig
* Rate-Limiting (geplant für Formular)
* Content Security Policy (CSP) wird empfohlen

---

## Inhalte pflegen

* Texte **kurz, klar, freundlich** halten
* Keine unnötigen Effekte – **Weniger ist mehr**
* Bei Änderungen: `app/page.tsx` bearbeiten
* Kontaktdaten in `app/page.tsx` (Zeilen 215, 225, 235)

---

## Deployment

**Vercel (empfohlen):**

1. Repository zu Vercel verbinden
2. Automatische Deployments bei jedem Push
3. Preview Deployments für PRs

**Andere Plattformen:**

```bash
npm run build
npm start
```

Oder Docker:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

---

## Wartung

* **Monatlich:** Dependency-Updates (`npm outdated`, `npm update`)
* **Quartalsweise:** Inhalte/SEO-Review
* **Performance:** Lighthouse regelmäßig prüfen (Ziel: 90+ in allen Bereichen)

---

## Hinweise zu Next.js 15

* **Partial Prerendering (PPR)** ist experimentell – für diesen One-Pager nicht aktiviert
* **React 19** wird voll unterstützt
* **Turbopack** ist in Dev stabil, für Production Build optional via `--turbopack` Flag

---

## Leitmotiv

> **„Eleganz durch Einfachheit"** – jedes Detail dient der Ruhe, Klarheit und Schönheit der Seite.

---

## Lizenz

Alle Rechte vorbehalten © 2025 Sanierungssprint25

---

## Support

Bei Fragen zum Projekt: [GitHub Issues](https://github.com/yourusername/sanierungssprint25/issues)
