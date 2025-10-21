"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AGB() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 lg:px-12 py-6 bg-white border-b border-gray-200">
        <Link
          href="/"
          className="flex items-center gap-2 text-black text-sm font-light tracking-[0.2em] hover:text-gray-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          ZURÜCK
        </Link>
      </nav>

      <div className="pt-32 pb-20 px-8 lg:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-wide">ALLGEMEINE GESCHÄFTSBEDINGUNGEN</h1>

          <div className="space-y-8 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-medium mb-4 tracking-wide">§ 1 Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen
                Sanierungssprint25 (nachfolgend „Auftragnehmer") und dem Auftraggeber über
                Sanierungsleistungen, insbesondere die Durchführung von Komplettsanierungen in 25 Tagen.
              </p>
              <p className="mt-4">
                Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des
                Auftraggebers werden nicht Vertragsbestandteil, es sei denn, der Auftragnehmer hat
                ihrer Geltung ausdrücklich schriftlich zugestimmt.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4 tracking-wide">§ 2 Vertragsschluss</h2>
              <p>
                Der Vertrag kommt durch die schriftliche Auftragsbestätigung des Auftragnehmers zustande.
                Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern nicht ausdrücklich
                als verbindlich gekennzeichnet.
              </p>
              <p className="mt-4">
                Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung durch
                den Auftragnehmer.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4 tracking-wide">§ 3 Leistungsumfang</h2>
              <p>
                Der Umfang der zu erbringenden Leistungen ergibt sich aus der Leistungsbeschreibung im
                Angebot bzw. der Auftragsbestätigung. Der Auftragnehmer koordiniert alle erforderlichen
                Gewerke für die Sanierung.
              </p>
              <p className="mt-4">
                Zusätzliche Leistungen, die nicht im ursprünglichen Leistungsumfang enthalten sind,
                werden gesondert berechnet und bedürfen der vorherigen schriftlichen Vereinbarung.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4 tracking-wide">§ 4 Preise und Zahlungsbedingungen</h2>
              <p>
                Es gelten die im Angebot bzw. in der Auftragsbestätigung genannten Preise. Alle Preise
                verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.
              </p>
              <p className="mt-4">
                Zahlungen sind wie folgt zu leisten:<br />
                - 30% bei Auftragserteilung<br />
                - 40% bei Baubeginn<br />
                - 30% bei Abnahme
              </p>
              <p className="mt-4">
                Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in Höhe von 5
                Prozentpunkten über dem Basiszinssatz zu verlangen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4 tracking-wide">§ 5 Ausführungsfristen</h2>
              <p>
                Der Auftragnehmer ist bestrebt, die vereinbarte Sanierung innerhalb von 25 Werktagen
                durchzuführen. Die Frist beginnt mit dem Baubeginn.
              </p>
              <p className="mt-4">
                Die Einhaltung der Ausführungsfrist setzt voraus, dass der Auftraggeber alle
                erforderlichen Mitwirkungspflichten erfüllt und das Bauobjekt rechtzeitig und in
                vereinbartem Zustand zur Verfügung stellt.
              </p>
              <p className="mt-4">
                Bei höherer Gewalt, behördlichen Anordnungen oder anderen vom Auftragnehmer nicht zu
                vertretenden Umständen verlängert sich die Ausführungsfrist angemessen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4 tracking-wide">§ 6 Mitwirkungspflichten des Auftraggebers</h2>
              <p>
                Der Auftraggeber verpflichtet sich:<br />
                - Das Bauobjekt rechtzeitig und geräumt zur Verfügung zu stellen<br />
                - Erforderliche behördliche Genehmigungen beizubringen<br />
                - Zugang zu Strom und Wasser zu gewährleisten<br />
                - Notwendige Unterlagen und Informationen bereitzustellen
              </p>
              <p className="mt-4">
                Verzögerungen aufgrund nicht erfüllter Mitwirkungspflichten gehen zu Lasten des
                Auftraggebers und können zu Mehrkosten führen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4 tracking-wide">§ 7 Abnahme</h2>
              <p>
                Nach Fertigstellung der Leistungen erfolgt eine gemeinsame Abnahme. Der Auftraggeber ist
                verpflichtet, die erbrachten Leistungen unverzüglich zu prüfen und eventuelle Mängel
                unverzüglich schriftlich zu rügen.
              </p>
              <p className="mt-4">
                Wird die Abnahme ohne Angabe von wesentlichen Mängeln verweigert, gilt die Leistung als
                abgenommen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4 tracking-wide">§ 8 Gewährleistung</h2>
              <p>
                Für Mängel der erbrachten Leistungen haftet der Auftragnehmer nach den gesetzlichen
                Bestimmungen. Die Gewährleistungsfrist beträgt 5 Jahre ab Abnahme für Bauleistungen und
                2 Jahre für sonstige Leistungen.
              </p>
              <p className="mt-4">
                Bei berechtigten Mängelrügen ist der Auftragnehmer zunächst zur Nachbesserung berechtigt.
                Schlägt die Nachbesserung zweimal fehl, kann der Auftraggeber Minderung verlangen oder
                vom Vertrag zurücktreten.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4 tracking-wide">§ 9 Haftung</h2>
              <p>
                Der Auftragnehmer haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für die
                Verletzung von Leben, Körper und Gesundheit.
              </p>
              <p className="mt-4">
                Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher
                Vertragspflichten (Kardinalpflichten). In diesem Fall ist die Haftung auf den
                vertragstypischen, vorhersehbaren Schaden begrenzt.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4 tracking-wide">§ 10 Kündigung</h2>
              <p>
                Beide Parteien können den Vertrag aus wichtigem Grund außerordentlich kündigen. Ein
                wichtiger Grund liegt insbesondere vor bei:<br />
                - Zahlungsverzug von mehr als 14 Tagen<br />
                - Wesentlichen Verstößen gegen Vertragspflichten<br />
                - Insolvenz der anderen Partei
              </p>
              <p className="mt-4">
                Die Kündigung bedarf der Schriftform.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4 tracking-wide">§ 11 Datenschutz</h2>
              <p>
                Der Auftragnehmer verarbeitet personenbezogene Daten des Auftraggebers ausschließlich zur
                Vertragsabwicklung und in Übereinstimmung mit den geltenden Datenschutzbestimmungen,
                insbesondere der DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4 tracking-wide">§ 12 Schlussbestimmungen</h2>
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
              </p>
              <p className="mt-4">
                Gerichtsstand ist der Sitz des Auftragnehmers, sofern der Auftraggeber Kaufmann,
                juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
              </p>
              <p className="mt-4">
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies die
                Wirksamkeit der übrigen Bestimmungen nicht.
              </p>
            </section>

            <section className="pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-600">
                Stand: Januar 2025
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
