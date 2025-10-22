# Website Design Dokumentation - Sanierungssprint25

## Übersicht
Diese Dokumentation beschreibt alle Designelemente, Farben, Formen, Stile und die Struktur der Sanierungssprint25-Website.

---

## 1. Farbpalette

### Hauptfarben
- **Schwarz**: `#000000` - Primäre Hintergrundfarbe für Hero, Prozess-Section
- **Weiß**: `#FFFFFF` - Primäre Hintergrundfarbe für Services, Projekte, Kontakt
- **Grau-Töne**:
  - `bg-zinc-900` - Dunkelgrau für Service-Cards
  - `text-gray-300` - Hellgrau für Subtext auf dunklem Hintergrund
  - `text-gray-400` - Mittleres Grau für Labels und sekundäre Informationen
  - `text-gray-600` - Dunkles Grau für Text auf hellem Hintergrund
  - `text-gray-700` - Sehr dunkles Grau für Zahlen und dezente Elemente
  - `border-gray-200` - Helle Rahmenlinien
  - `border-gray-800` - Dunkle Rahmenlinien

### Akzentfarbe
- **Accent**: Wird durch `hover:text-accent` definiert - für Hover-Effekte und Interaktionen

---

## 2. Typografie

### Schriftfamilie
- **System Font Stack**: Standard Next.js Font (likely Geist/Inter)
- **Fallback**: Sans-serif System-Fonts

### Schriftgrößen

#### Hero-Section
- **Desktop**: `text-8xl` bis `text-9xl` (96px - 128px)
- **Tablet**: `text-7xl` (72px)
- **Mobile**: `text-5xl` (48px)

#### Überschriften
- **H1 (Section Headlines)**:
  - Desktop: `text-6xl` (60px)
  - Tablet: `text-5xl` (48px)
  - Mobile: `text-3xl` (30px)
- **H2 (Project Titles)**:
  - Desktop: `text-5xl` (48px)
  - Tablet: `text-4xl` (36px)
  - Mobile: `text-3xl` (30px)
- **H3 (Service Titles)**: `text-3xl` bis `text-4xl` (30px - 36px)
- **H4 (Partner Names)**: `text-base` (16px)

#### Menü
- **Desktop**: `text-6xl` bis `text-7xl` (60px - 72px)
- **Tablet**: `text-6xl` (60px)
- **Mobile**: `text-3xl` (30px)

#### Fließtext
- **Standard**: `text-sm` (14px)
- **Labels**: `text-xs` (12px)
- **Kontaktinfo**: `text-xl` (20px)

### Schriftgewicht
- **Light**: `font-light` (300) - Primär für Headlines und große Texte
- **Normal**: `font-normal` (400) - Standard-Fließtext
- **Medium**: `font-medium` (500) - Hervorhebungen

### Letter Spacing (Tracking)
- **Extrem**: `tracking-[0.3em]` - Labels und Codes wie [SCTB-01]
- **Stark**: `tracking-[0.2em]` - Buttons und Call-to-Actions
- **Normal**: `tracking-[0.15em]` - Headlines
- **Reduziert Mobile**: `tracking-[0.1em]` - Mobile Headlines

---

## 3. Layout & Struktur

### Grid-System
- **Max-Width Container**: `max-w-7xl mx-auto` (1280px zentriert)
- **Padding**:
  - Desktop: `px-12` (48px)
  - Mobile: `px-8` (32px)
  - Vertikal: `py-20` (80px)

### Sections
Jede Section hat:
- Fullscreen oder min-height-screen
- Wechselnde Hintergründe (Schwarz ↔ Weiß)
- Section-Header mit Code-Label
- Großzügige Whitespace

### Responsive Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

---

## 4. Navigationselemente

### Top Navigation
- **Position**: Fixed, top-0
- **Höhe**: `py-6` (24px padding)
- **Logo**: Klein, links, `text-sm tracking-[0.2em]`
- **Hamburger Menu**: Rechts, 3 Linien (6px breit, 1px hoch)
- **Farbe**: Dynamisch - Schwarz auf weißem Hintergrund, Weiß auf schwarzem Hintergrund

### Fullscreen Menu
- **Hintergrund**: Vollbild, schwarz, `z-[55]`
- **Layout**: Zentriert, vertikal
- **Navigation Items**:
  - Großer Text (siehe Typografie → Menü)
  - Vertikaler Abstand: `space-y-8`
  - Hover-Effekt: Verschiebt sich nach rechts (`whileHover={{ x: 10 }}`)
- **X-Button**:
  - Position: Top-right (32px / 48px vom Rand)
  - Größe: 48x48px
  - Icon: 32x32px
  - Rotation beim Hover: 90 Grad

---

## 5. Buttons & Call-to-Actions

### Primary Button (Weiß auf Schwarz)
```
- Hintergrund: Weiß
- Text: Schwarz
- Padding: px-8 py-3
- Text: text-sm tracking-[0.2em] uppercase
- Hover: bg-gray-200
```

### Secondary Button (Outline)
```
- Border: 1px weiß
- Text: Weiß
- Padding: px-8 py-3
- Text: text-sm tracking-[0.2em] uppercase
- Hover: bg-white text-black (invertiert)
```

### Submit Button (Schwarz)
```
- Hintergrund: Schwarz
- Text: Weiß
- Padding: px-8 py-3
- Hover: bg-gray-800
```

---

## 6. Animationen

### Scroll-Animation
- **Dauer**: 1500ms (1.5 Sekunden)
- **Easing**: Custom Cubic Bezier
  ```javascript
  ease: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  ```

### Fade-In (Standard)
```javascript
initial: { opacity: 0, y: 30 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
```

### Menu Items Animation
```javascript
initial: { opacity: 0, y: 50 }
animate: { opacity: 1, y: 0 }
exit: { opacity: 0, y: -30 }
transition: {
  delay: 0.5 + index * 0.2,
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1]
}
```

### Hover-Effekte
- **Navigation**: `x: 10` (10px nach rechts)
- **Cards**: Border-Farbe ändert sich
- **X-Button**: Rotation um 90 Grad
- **Bilder**: Grayscale entfernen

### Transition-Zeiten
- **Schnell**: 300ms - Farb- und kleine Transformationen
- **Standard**: 500ms - Card-Animationen
- **Langsam**: 800ms - 1200ms - Section-Einblendungen
- **Scroll**: 1500ms - Smooth-Scrolling

---

## 7. Bilderstil

### Behandlung
- **Lightbox**: Fullscreen-Modal mit Navigation
- **Thumbnails**:
  - Aspect Ratio: 4:3
  - Grayscale: 30% (normal), 0% (hover)
  - Grid: 2 Spalten (mobile), 4 Spalten (desktop)
  - Gap: 16px

### Hintergrundbilder
- **Hero**: Full-Cover mit Overlay
  - Gradient: `from-black/60 via-black/40 to-black/70`
  - Vignette: Radial Gradient
- **Services**: Subtiles Bild rechts mit Opacity 8%
  - Fade: Left-to-right gradient overlay

### Zoom-Effekt
- Icon: Kreis mit Lupe
- Anzeige: Bei Hover über Thumbnail

---

## 8. Cards & Container

### Service Card
```
- Hintergrund: bg-zinc-900 (Dunkelgrau)
- Text: Weiß
- Padding: p-8 lg:p-12
- Hintergrund-Overlay: 20% opacity
- Border-Radius: none (eckig)
```

### Partner Card
```
- Border: 1px gray-200
- Padding: p-6
- Hover: border-black
- Layout: Vertikal
- Counter: Oben (01, 02, etc.)
- Arrow-Icon: Unten rechts mit Hover-Animation
```

### Project Stats
```
- Border-Bottom: border-gray-200
- Padding-Bottom: pb-3
- Layout: Flex (justify-between)
- Text-Split: Label (grau) | Wert (schwarz, medium)
```

---

## 9. Formulare

### Input-Felder
```
- Hintergrund: Transparent
- Border: Bottom-only, 1px schwarz
- Padding: py-3
- Font-Size: text-sm
- Tracking: tracking-[0.2em]
- Placeholder: text-gray-400
- Focus: border-gray-600 (ohne Outline)
```

### Textarea
```
- Gleiche Stilierung wie Input
- Rows: 4
- Resize: none (nicht vergrößerbar)
```

---

## 10. Section-Codes & Labels

### Format
- **Position**: Top-right der Section
- **Stil**: `text-xs tracking-[0.3em] text-gray-400`
- **Beispiele**:
  - `[SCTB-01]` - Services
  - `[PRCS-01]` - Prozess
  - `[PRJCT-01]` - Projekt
  - `[CNTC-01]` - Kontakt

---

## 11. Footer

### Struktur
```
- Hintergrund: Schwarz
- Text: Weiß / Grau
- Padding: py-12
- Grid: 3 Spalten (Desktop), 1 Spalte (Mobile)
- Inhalt:
  1. Brand + Tagline
  2. Navigation
  3. Rechtliches
- Copyright: Zentriert, Klein, Grau
```

---

## 12. Spacing-System

### Vertikale Abstände
- **Section-Padding**: `py-20` (80px)
- **Section-Header-Margin**: `mb-16` (64px)
- **Headline-Margin**: `mb-20` (80px)
- **Element-Spacing**: `space-y-8` (32px) oder `space-y-6` (24px)
- **Card-Gap**: `gap-8` (32px) oder `gap-4` (16px)

### Horizontale Abstände
- **Container**: `px-8 lg:px-12` (32px / 48px)
- **Grid-Gap**: `gap-16` (64px) oder `gap-8` (32px)

---

## 13. Z-Index Hierarchie

```
z-0     - Hintergrundbilder
z-10    - Overlays und Content
z-50    - Navigation Bar
z-[55]  - Fullscreen Menu
z-[60]  - Menu X-Button
z-[100] - Image Lightbox
z-[110] - Lightbox Controls
```

---

## 14. Prozess-Steps

### Design
```
- Border-Top: border-gray-800
- Padding-Top: pt-6
- Nummerierung: text-5xl font-light text-gray-700
- Titel: text-xl tracking-[0.15em]
- Beschreibung: text-sm text-gray-400
- Layout: 4 Spalten (Desktop), 1 Spalte (Mobile)
```

---

## 15. Besondere Stilelemente

### Scroll-Indicator (Hero)
```
- Position: Absolute bottom-8
- Stil: Vertikale Linie (1px breit, 64px hoch)
- Gradient: from-white to-transparent
- Animation: Fade-in mit Delay (1.5s)
```

### Vignette/Overlays
- **Hero**: Mehrschichtig (Gradient + Radial)
- **Services**: Links-nach-rechts Fade
- **Images**: Bottom-to-top für Labels

---

## 16. Mobile-Optimierungen

### Besonderheiten
- **Menu-Text**: Kleinere Schrift + reduziertes Tracking
- **Menu-Padding**: `px-4` für Rand-Abstand
- **Button-Layout**: Stack vertikal (flex-col)
- **Grid**: Automatische Reduzierung auf 1-2 Spalten
- **Bilder**: 2 Spalten statt 4

---

## 17. Interaktive Elemente

### Lightbox
```
- Hintergrund: Vollbild schwarz
- Navigation: Pfeile links/rechts
- Counter: Top-left
- Close-Button: Top-right (X-Icon)
- Image-Label: Unter dem Bild
- Keyboard: Arrow-Keys + Escape
```

### Hover-Zustände
- **Links**: Text-Farbe → Accent oder Weiß
- **Buttons**: Background-Farbe + Text-Farbe ändern
- **Cards**: Border-Farbe verstärken
- **Navigation**: Verschiebung nach rechts

---

## 18. Konventionen

### Naming
- Uppercase für alle UI-Labels
- Deutsche Sprache für Content
- Englisch für Code-Labels

### Konsistenz
- Alle Sections folgen demselben Header-Pattern
- Wechselnde Hintergründe (Schwarz/Weiß)
- Durchgängiges Tracking-System
- Einheitliche Animation-Easing-Funktion

---

## 19. Performance-Hinweise

### Bilder
- Verwendung von `<img>` statt `<Image>` (bewusste Entscheidung für volle Kontrolle)
- Lazy Loading für Thumbnails
- Optimierte Overlays statt schwerer Filter

### Animationen
- Verwendung von `requestAnimationFrame` für smooth Scrolling
- Framer Motion für deklarative Animationen
- GPU-beschleunigung durch `transform` und `opacity`

---

*Dokumentation erstellt am: 22.10.2025*
*Projekt: Sanierungssprint25*
*Framework: Next.js 15 mit Turbopack*
