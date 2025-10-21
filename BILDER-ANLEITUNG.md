# Bilder-Integration für Sanierungssprint25

## Hero-Hintergrundbild (Vorher/Nachher Haus)

### Konzept:
Ein Haus, das die Transformation zeigt:
- **Linke Seite:** Alt, sanierungsbedürftig, evtl. überwuchert
- **Rechte Seite:** Komplett neu saniert, modern, sauber
- **Vertikale Trennlinie** in der Mitte symbolisiert die Transformation

### Anforderungen an das Bild:

**Technisch:**
- Format: JPG oder WebP
- Mindestgröße: 1920x1080px (besser 2560x1440px für 4K-Displays)
- Dateigröße: < 500KB (komprimiert)
- Seitenverhältnis: 16:9 oder breiter

**Inhaltlich:**
- Horizontale Komposition (Haus von vorne)
- Deutlicher Kontrast zwischen alt/neu
- Nicht zu viele Details (wegen Text-Overlay)
- Dunkle/mittlere Töne (damit weißer Text gut lesbar bleibt)

### Bild einfügen:

1. **Bild vorbereiten:**
   ```bash
   # Bild komprimieren (z.B. mit ImageOptim, TinyPNG)
   # Empfohlene Größe: 1920x1080px, 70-80% JPEG-Qualität
   ```

2. **Bild hochladen:**
   Speichere das Bild als `hero-house.jpg` im Ordner `/public/`
   ```
   /public/hero-house.jpg
   ```

3. **Fertig!**
   Next.js lädt das Bild automatisch von `/hero-house.jpg`
   (der Code ist bereits vorbereitet in `app/page.tsx` Zeile 57)

### Alternative: Mehrere Bildvarianten

Für optimale Performance kannst du auch verschiedene Größen bereitstellen:

```
/public/
  hero-house-mobile.jpg   (800x600px)
  hero-house-tablet.jpg   (1280x720px)
  hero-house-desktop.jpg  (1920x1080px)
  hero-house-4k.jpg       (2560x1440px)
```

Dann in `app/page.tsx` anpassen:
```tsx
<div className="absolute inset-0 bg-[url('/hero-house-desktop.jpg')] md:bg-[url('/hero-house-4k.jpg')] bg-cover bg-center">
```

### Temporärer Platzhalter:

Aktuell wird ein Gradient-Fallback angezeigt:
- Linke Seite: Dunkler (simuliert "alt")
- Rechte Seite: Heller (simuliert "neu")
- Vertikale Linie in der Mitte

Sobald `/public/hero-house.jpg` existiert, wird automatisch das echte Bild verwendet.

### Bildquellen-Empfehlungen:

Falls du noch kein eigenes Foto hast, kannst du Stockfotos verwenden:

**Kostenlos:**
- Unsplash.com (Suche: "house renovation before after")
- Pexels.com (Suche: "home renovation")

**Premium:**
- Shutterstock
- Adobe Stock

**Eigene Fotos:**
Am besten: Eigene Projekt-Fotos mit echter Vorher/Nachher-Ansicht!

### WebP-Konvertierung (optional, für bessere Performance):

```bash
# Bild zu WebP konvertieren (kleinere Dateigröße)
# macOS mit Homebrew:
brew install webp
cwebp -q 80 hero-house.jpg -o hero-house.webp

# Dann beide Formate bereitstellen:
# /public/hero-house.jpg (Fallback)
# /public/hero-house.webp (moderne Browser)
```

Code-Anpassung für WebP:
```tsx
<div className="absolute inset-0">
  <picture>
    <source srcSet="/hero-house.webp" type="image/webp" />
    <img src="/hero-house.jpg" alt="" className="w-full h-full object-cover" />
  </picture>
</div>
```

---

## Services Section Hintergrund

Das Bild im Services-Bereich (Zeile 148 in `app/page.tsx`) zeigt ein modernes Architektur-Rendering.

**So ändern:**
1. Speichere dein Bild als `/public/services-bg.jpg`
2. Ersetze in Zeile 148:
   ```tsx
   <div className="absolute inset-0 bg-[url('/services-bg.jpg')] bg-cover bg-center"></div>
   ```

**Anforderungen:**
- Architektur/Innenraum-Rendering
- Dunkle Töne (Overlay macht es noch dunkler)
- 1920x1080px
- < 300KB

---

## Tipps für beste Darstellung:

1. **Kontrast prüfen:** Der Text muss gut lesbar bleiben
2. **Mobile testen:** Bild sollte auch auf kleinen Screens funktionieren
3. **Ladezeit:** Bilder komprimieren (< 500KB für Hero, < 300KB für Services)
4. **Alt-Text:** Füge aussagekräftige Alt-Texte hinzu (Barrierefreiheit)

---

Bei Fragen: Code ist in `/app/page.tsx` ab Zeile 50 (Hero) und Zeile 147 (Services).
