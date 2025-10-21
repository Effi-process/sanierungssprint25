# E-Mail Setup für Kontaktformular

Das Kontaktformular ist jetzt mit **Resend** integriert. Um E-Mails zu versenden, musst du einen Resend API-Schlüssel konfigurieren.

## Schritt 1: Resend Account erstellen

1. Gehe zu [resend.com](https://resend.com)
2. Erstelle einen kostenlosen Account
3. Bestätige deine E-Mail-Adresse

## Schritt 2: API-Schlüssel erstellen

1. Gehe zu [resend.com/api-keys](https://resend.com/api-keys)
2. Klicke auf "Create API Key"
3. Gib einen Namen ein (z.B. "Sanierungssprint25 Production")
4. Wähle "Full access" oder "Sending access"
5. Kopiere den generierten API-Schlüssel (beginnt mit `re_...`)

## Schritt 3: API-Schlüssel in der App konfigurieren

1. Erstelle eine Datei `.env.local` im Hauptverzeichnis des Projekts:
   ```bash
   touch .env.local
   ```

2. Füge deinen API-Schlüssel hinzu:
   ```
   RESEND_API_KEY=re_dein_api_schlüssel_hier
   ```

3. Starte den Development-Server neu:
   ```bash
   npm run dev
   ```

## Schritt 4: (Optional) Eigene Domain einrichten

Standardmäßig werden E-Mails von `onboarding@resend.dev` gesendet. Um E-Mails von deiner eigenen Domain zu senden:

1. Gehe zu [resend.com/domains](https://resend.com/domains)
2. Füge deine Domain hinzu (z.B. `sanierungssprint25.de`)
3. Konfiguriere die DNS-Einträge (SPF, DKIM, DMARC)
4. Warte auf die Verifizierung (kann einige Minuten dauern)
5. Aktualisiere die "from"-Adresse in `app/api/contact/route.ts`:
   ```typescript
   from: 'Kontakt <noreply@sanierungssprint25.de>'
   ```

## Schritt 5: Testen

1. Öffne die Website: http://localhost:8000
2. Scrolle zum Kontaktformular
3. Fülle das Formular aus und sende es ab
4. Überprüfe dein E-Mail-Postfach bei `info@sanierungssprint25.de`

## Kostenlose Limits

Resend bietet im kostenlosen Plan:
- **3.000 E-Mails pro Monat**
- **100 E-Mails pro Tag**
- **1 verifizierte Domain**

Das sollte für eine Website mit Kontaktformular mehr als ausreichend sein!

## Troubleshooting

### E-Mails kommen nicht an?

1. Überprüfe, ob der API-Schlüssel korrekt in `.env.local` gesetzt ist
2. Stelle sicher, dass `.env.local` nicht in Git committed wurde
3. Überprüfe die Server-Logs im Terminal
4. Prüfe den Spam-Ordner
5. Überprüfe im Resend Dashboard unter "Logs" ob die E-Mail gesendet wurde

### Fehler: "RESEND_API_KEY ist nicht konfiguriert"

Die `.env.local` Datei wurde nicht gefunden oder der API-Schlüssel ist nicht gesetzt. Stelle sicher, dass:
- Die Datei `.env.local` im Hauptverzeichnis existiert
- Der Inhalt korrekt ist: `RESEND_API_KEY=re_...`
- Der Development-Server neu gestartet wurde

## Deployment

Wenn du die Website deployst (z.B. auf Vercel), musst du den API-Schlüssel als Umgebungsvariable hinzufügen:

### Vercel:
1. Gehe zu deinem Projekt → Settings → Environment Variables
2. Füge hinzu: `RESEND_API_KEY` = `re_dein_api_schlüssel`
3. Speichere und deploye neu

### Andere Plattformen:
Füge die Umgebungsvariable `RESEND_API_KEY` in den Einstellungen deiner Hosting-Plattform hinzu.
