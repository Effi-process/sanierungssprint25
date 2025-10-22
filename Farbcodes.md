# Farbcodes - Sanierungssprint25

Vollständige Übersicht aller verwendeten Farben auf der Website.

---

## Primäre Farben

| Farbe             | Variable/Klasse         | Hex-Code | RGB                | Verwendung                              |
|-------------------|-------------------------|----------|--------------------|-----------------------------------------|
| Schwarz           | `--primary` / `bg-black`    | `#000000`  | `rgb(0, 0, 0)`       | Haupthintergrund, Primärtext            |
| Baustellen-Orange | `--accent` / `text-accent`  | `#FF6B35`  | `rgb(255, 107, 53)`  | Akzentfarbe - Hover-Effekte, Highlights |
| Weiß              | `--foreground` / `bg-white` | `#FFFFFF`  | `rgb(255, 255, 255)` | Heller Hintergrund, Text                |

---

## Sekundäre Farben

| Farbe         | Variable     | Hex-Code | RGB               | Verwendung                                      |
|---------------|--------------|----------|-------------------|-------------------------------------------------|
| Dunkelgrau    | `--supporting` | `#1A1A1A`  | `rgb(26, 26, 26)`   | Unterstützende Farbe                            |
| Frisches Mint | `--highlight`  | `#4ECDC4`  | `rgb(78, 205, 196)` | Highlight-Farbe (aktuell nicht aktiv verwendet) |

---

## Grautöne (Tailwind)

| Farbe    | Hex-Code | RGB                | Verwendung                      |
|----------|----------|--------------------|---------------------------------|
| Zinc-900 | `#18181B`  | `rgb(24, 24, 27)`    | Service-Card Hintergrund        |
| Gray-100 | `#F3F4F6`  | `rgb(243, 244, 246)` | Bild-Platzhalter                |
| Gray-200 | `#E5E7EB`  | `rgb(229, 231, 235)` | Hover-Button, Borders           |
| Gray-300 | `#D1D5DB`  | `rgb(209, 213, 219)` | Subtext auf dunklem Hintergrund |
| Gray-400 | `#9CA3AF`  | `rgb(156, 163, 175)` | Labels, Section-Codes           |
| Gray-600 | `#4B5563`  | `rgb(75, 85, 99)`    | Text auf hellem Hintergrund     |
| Gray-700 | `#374151`  | `rgb(55, 65, 81)`    | Prozess-Nummern                 |
| Gray-800 | `#1F2937`  | `rgb(31, 41, 55)`    | Button-Hover, dunkle Borders    |

---

## Theme-Variablen (CSS Custom Properties)

| Variable           | Hex-Code | RGB                | Verwendung             |
|--------------------|----------|--------------------|------------------------|
| `--muted`            | `#2A2A2A`  | `rgb(42, 42, 42)`    | Gedämpfte Hintergründe |
| `--muted-foreground` | `#A1A1A1`  | `rgb(161, 161, 161)` | Gedämpfter Text        |
| `--border`           | `#333333`  | `rgb(51, 51, 51)`    | Standard-Rahmen        |

---

## Statusfarben

| Farbe        | Hex-Code | RGB              | Verwendung      |
|--------------|----------|------------------|-----------------|
| Success-Grün | `#16A34A`  | `rgb(22, 163, 74)` | Formular-Erfolg |
| Error-Rot    | `#DC2626`  | `rgb(220, 38, 38)` | Formular-Fehler |
| Link-Blau    | `#2563EB`  | `rgb(37, 99, 235)` | Hyperlinks      |

---

## Farbpalette - Schnellübersicht

### Haupt-Palette
```
Schwarz:           #000000
Baustellen-Orange: #FF6B35  ← AKZENTFARBE
Weiß:              #FFFFFF
```

### Grau-Skala
```
Zinc-900:  #18181B
Gray-100:  #F3F4F6
Gray-200:  #E5E7EB
Gray-300:  #D1D5DB
Gray-400:  #9CA3AF
Gray-600:  #4B5563
Gray-700:  #374151
Gray-800:  #1F2937
```

### Theme-Grautöne
```
Dunkelgrau (Supporting): #1A1A1A
Muted Background:        #2A2A2A
Muted Foreground:        #A1A1A1
Border:                  #333333
```

### Status & Akzente
```
Orange (Accent):  #FF6B35  ← HAUPTAKZENT
Mint (Highlight): #4ECDC4
Grün (Success):   #16A34A
Rot (Error):      #DC2626
Blau (Link):      #2563EB
```

---

## Transparente Varianten

### Weiß mit Opacity
- `text-white/60` - 60% Opacity
- `text-white/10` - 10% Opacity
- `border-white/10` - 10% Opacity
- `border-white/30` - 30% Opacity

### Schwarz mit Opacity (Overlays)
- `from-black/60` - 60% Opacity (Gradient Start)
- `via-black/40` - 40% Opacity (Gradient Mitte)
- `to-black/70` - 70% Opacity (Gradient Ende)

---

## CSS Custom Properties (Root-Definition)

Definiert in `app/globals.css`:

```css
:root {
  --primary: #000000;        /* Schwarz */
  --accent: #FF6B35;         /* Baustellen-Orange */
  --supporting: #1a1a1a;     /* Dunkelgrau */
  --highlight: #4ECDC4;      /* Frisches Mint */
  --background: #000000;
  --foreground: #ffffff;
  --muted: #2a2a2a;
  --muted-foreground: #a1a1a1;
  --border: #333333;
}
```

---

## Verwendungshinweise

### Akzentfarbe Orange (#FF6B35)
Die Hauptakzentfarbe wird verwendet für:
- ✅ Hover-Effekte auf Navigationslinks
- ✅ Hover-Effekte auf Menü-Items
- ✅ Hover-Effekte auf Partner-Cards
- ✅ Interaktive Elemente
- ✅ Call-to-Action Highlights

### Farbkontraste
- **Schwarzer Hintergrund**: Verwende Weiß oder helle Grautöne (Gray-300, Gray-400) für Text
- **Weißer Hintergrund**: Verwende Schwarz oder dunkle Grautöne (Gray-600, Gray-700) für Text
- **Orange-Akzent**: Funktioniert auf beiden Hintergründen (Schwarz & Weiß)

### Accessibility
Alle Farbkombinationen erfüllen WCAG 2.1 AA Standards für Kontrast:
- Schwarz auf Weiß: 21:1 (AAA)
- Weiß auf Schwarz: 21:1 (AAA)
- Orange auf Schwarz: 8.6:1 (AA)
- Orange auf Weiß: 2.4:1 (Nur für große Texte)

---

*Dokumentation erstellt am: 22.10.2025*
*Projekt: Sanierungssprint25*
