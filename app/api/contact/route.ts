import { NextResponse } from 'next/server'

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

    // Hier würde normalerweise ein E-Mail-Service wie SendGrid, Resend, oder Nodemailer verwendet
    // Für jetzt loggen wir die Daten und senden eine erfolgreiche Antwort
    console.log('Neue Kontaktanfrage:')
    console.log('Name:', name)
    console.log('E-Mail:', email)
    console.log('Nachricht:', message)
    console.log('Ziel-E-Mail: info@sanierungssprint25.de')

    // Hier könntest du einen E-Mail-Service integrieren, z.B.:
    // await sendEmail({
    //   to: 'info@sanierungssprint25.de',
    //   from: email,
    //   subject: `Kontaktanfrage von ${name}`,
    //   text: message
    // })

    return NextResponse.json(
      { message: 'Nachricht erfolgreich gesendet' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Fehler beim Senden der Nachricht:', error)
    return NextResponse.json(
      { error: 'Fehler beim Senden der Nachricht' },
      { status: 500 }
    )
  }
}
