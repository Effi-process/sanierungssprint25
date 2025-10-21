# E-Mail Setup für Kontaktformular (Strato)

Das Kontaktformular ist jetzt mit **Nodemailer** und **Strato SMTP** eingerichtet.

## Schritt 1: E-Mail-Adresse bei Strato einrichten

Falls noch nicht geschehen:
1. Logge dich in deinen Strato-Account ein
2. Gehe zu "E-Mail" → "E-Mail-Verwaltung"
3. Erstelle die E-Mail-Adresse `info@sanierungssprint25.de` (falls nicht vorhanden)
4. Notiere das Passwort

## Schritt 2: SMTP-Zugangsdaten konfigurieren

1. Erstelle eine `.env.local` Datei im Hauptverzeichnis:
   ```bash
   touch .env.local
   ```

2. Füge folgende Zeilen hinzu:
   ```env
   # Strato SMTP-Server
   SMTP_HOST=smtp.strato.de
   SMTP_PORT=465

   # Deine E-Mail-Adresse und Passwort
   SMTP_USER=info@sanierungssprint25.de
   SMTP_PASS=dein-tatsächliches-passwort

   # Empfänger-Adresse
   SMTP_TO=info@sanierungssprint25.de
   ```

3. **Wichtig**: Ersetze `dein-tatsächliches-passwort` mit dem echten Passwort deiner E-Mail-Adresse!

## Schritt 3: Server neu starten

```bash
# Stoppe den laufenden Server (Ctrl+C)
# Starte neu:
PORT=8000 npm run dev
```

## Schritt 4: Testen

1. Öffne http://localhost:8000
2. Scrolle zum Kontaktformular
3. Fülle es aus und sende ab
4. Überprüfe dein E-Mail-Postfach bei `info@sanierungssprint25.de`

## Strato SMTP-Einstellungen

| Einstellung | Wert |
|-------------|------|
| SMTP-Server | `smtp.strato.de` |
| Port | `465` (SSL/TLS) |
| Verschlüsselung | SSL/TLS |
| Benutzername | Deine vollständige E-Mail-Adresse |
| Passwort | Dein E-Mail-Passwort |

## Troubleshooting

### "SMTP-Konfiguration fehlt!"

Die `.env.local` Datei wurde nicht gefunden oder ist unvollständig:
- Stelle sicher, dass die Datei im Hauptverzeichnis existiert
- Überprüfe, dass alle 5 Variablen gesetzt sind
- Starte den Development-Server neu

### "Authentication failed"

Das Passwort ist falsch oder die E-Mail-Adresse existiert nicht:
- Überprüfe das Passwort in deinem Strato-Account
- Stelle sicher, dass die E-Mail-Adresse existiert
- Verwende die vollständige E-Mail-Adresse als Benutzernamen

### E-Mails kommen nicht an

- Überprüfe den Spam-Ordner
- Prüfe die Server-Logs im Terminal
- Stelle sicher, dass Port 465 nicht blockiert ist
- Kontaktiere Strato-Support, falls das Problem weiterhin besteht

### "Connection timeout"

- Überprüfe deine Internetverbindung
- Stelle sicher, dass keine Firewall Port 465 blockiert
- Versuche es mit Port 587 (STARTTLS) statt 465:
  ```env
  SMTP_PORT=587
  ```

## Deployment (wenn die Website live geht)

Wenn du die Website auf einen Server deployst:

1. **Bei Strato Hosting**:
   - Die `.env.local` Datei hochladen (z.B. via FTP)
   - ODER: Umgebungsvariablen im Hosting-Control-Panel setzen

2. **Bei Vercel/Netlify**:
   - Gehe zu Project Settings → Environment Variables
   - Füge alle SMTP-Variablen hinzu
   - Deploye neu

3. **Docker/VPS**:
   - Umgebungsvariablen in der Docker-Compose oder im Systemd-Service setzen

## Sicherheitshinweise

⚠️ **WICHTIG:**
- Die `.env.local` Datei NIEMALS in Git committen!
- Sie ist bereits in `.gitignore` enthalten
- Das E-Mail-Passwort niemals öffentlich teilen
- Für Production: Verwende sichere Passwörter und ändere sie regelmäßig

## Alternative: App-Passwort verwenden

Falls du 2-Faktor-Authentifizierung bei Strato nutzt:
1. Erstelle ein App-spezifisches Passwort in deinem Strato-Account
2. Verwende dieses Passwort statt deines normalen E-Mail-Passworts
