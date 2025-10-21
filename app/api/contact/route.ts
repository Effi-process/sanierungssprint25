import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Alle Felder sind erforderlich' },
        { status: 400 }
      )
    }

    // E-Mail Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      )
    }

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP-Konfiguration fehlt!')
      console.log('Neue Kontaktanfrage (E-Mail konnte nicht gesendet werden):')
      console.log('Name:', name)
      console.log('E-Mail:', email)
      console.log('Nachricht:', message)

      return NextResponse.json(
        {
          message: 'Nachricht wurde empfangen. Bitte konfigurieren Sie die SMTP-Einstellungen.',
          warning: 'E-Mail-Service nicht konfiguriert'
        },
        { status: 200 }
      )
    }

    // SMTP-Transporter für Strato erstellen
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // SSL/TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // E-Mail senden
    const info = await transporter.sendMail({
      from: `"Sanierungssprint25 Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || 'info@sanierungssprint25.de',
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Diese Nachricht wurde über das Kontaktformular auf sanierungssprint25.de gesendet.</p>
      `,
      text: `
Neue Kontaktanfrage

Name: ${name}
E-Mail: ${email}

Nachricht:
${message}

---
Diese Nachricht wurde über das Kontaktformular auf sanierungssprint25.de gesendet.
      `,
    })

    console.log('E-Mail erfolgreich gesendet:', info.messageId)

    return NextResponse.json(
      { message: 'Nachricht erfolgreich gesendet' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Fehler beim Senden der Nachricht:', error)
    return NextResponse.json(
      { error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}
