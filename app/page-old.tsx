"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-white text-sm font-light tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            sanierungssprint25
          </motion.div>
          <motion.button
            className="w-8 h-8 flex flex-col justify-center items-center gap-1.5 group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="w-6 h-[1px] bg-white transition-all group-hover:w-8"></span>
            <span className="w-6 h-[1px] bg-white transition-all group-hover:w-8"></span>
            <span className="w-6 h-[1px] bg-white transition-all group-hover:w-8"></span>
          </motion.button>
        </div>
      </nav>

      {/* Hero Section - Fullscreen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
            variants={fadeInUp}
          >
            <Clock className="w-4 h-4" />
            25 Tage bis zum neuen Zuhause
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            variants={fadeInUp}
          >
            Ihr Haus komplett saniert.
            <br />
            <span className="text-accent">In nur 25 Tagen.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Von der ersten Planung bis zur Schlüsselübergabe – wir verwandeln Ihr Haus in Rekordzeit.
            Professionell, zuverlässig und mit höchsten Qualitätsstandards.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Button size="lg" onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}>
              Jetzt Beratung anfragen
            </Button>
            <Button size="lg" variant="ghost" onClick={() => document.getElementById('prozess')?.scrollIntoView({ behavior: 'smooth' })}>
              So funktioniert's
            </Button>
          </motion.div>
        </motion.div>
      </Section>

      {/* Benefits Section */}
      <Section id="vorteile" className="bg-white">
        <SectionHeader
          title="Warum Sanierungssprint25?"
          subtitle="Drei gute Gründe, uns zu vertrauen"
        />

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <div className="w-14 h-14 bg-highlight/10 rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-highlight" />
                </div>
                <CardTitle>Garantiert in 25 Tagen</CardTitle>
                <CardDescription>
                  Wir halten, was wir versprechen. Dank perfekter Planung und koordiniertem Ablauf
                  steht Ihr saniertes Haus in genau 25 Tagen bereit.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-accent" />
                </div>
                <CardTitle>Alles aus einer Hand</CardTitle>
                <CardDescription>
                  Ein Ansprechpartner, ein Projekt, ein Ziel. Von Architektur über Handwerk bis zur
                  Abnahme – wir koordinieren alle Gewerke professionell.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-7 h-7 text-primary" />
                </div>
                <CardTitle>Höchste Qualität</CardTitle>
                <CardDescription>
                  Schnell bedeutet bei uns nicht oberflächlich. Geprüfte Fachkräfte, hochwertige
                  Materialien und lückenlose Qualitätskontrolle sind selbstverständlich.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* Process Section */}
      <Section id="prozess" className="bg-supporting/20">
        <SectionHeader
          title="Der Sanierungssprint-Prozess"
          subtitle="In vier klaren Schritten zum Ziel"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            { icon: Users, title: "1. Erstgespräch", desc: "Wir analysieren Ihr Objekt und besprechen Ihre Wünsche." },
            { icon: Hammer, title: "2. Planung", desc: "Detaillierte Planung aller Gewerke und Zeitabläufe." },
            { icon: TrendingUp, title: "3. Umsetzung", desc: "25 Tage koordinierte Sanierung mit laufender Kontrolle." },
            { icon: Sparkles, title: "4. Übergabe", desc: "Schlüsselfertig und bereit für Ihr neues Leben." }
          ].map((step, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-highlight/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.desc}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Contact Section */}
      <Section id="kontakt" className="bg-white">
        <SectionHeader
          title="Bereit für Ihre Sanierung?"
          subtitle="Kontaktieren Sie uns für ein unverbindliches Erstgespräch"
        />

        <motion.div
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Lassen Sie uns sprechen
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Schildern Sie uns Ihr Projekt und wir melden uns innerhalb von 24 Stunden
                      mit einem ersten Sanierungsplan bei Ihnen.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-highlight/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-highlight" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Telefon</p>
                        <p className="text-muted-foreground">+49 (0) 123 456 789</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">E-Mail</p>
                        <p className="text-muted-foreground">info@sanierungssprint25.de</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Standort</p>
                        <p className="text-muted-foreground">Bundesweit tätig</p>
                      </div>
                    </div>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Max Mustermann"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="max@beispiel.de"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                      placeholder="Beschreiben Sie kurz Ihr Sanierungsprojekt..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Anfrage senden
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Mit dem Absenden akzeptieren Sie unsere Datenschutzerklärung.
                  </p>
                </form>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sanierungssprint25</h3>
              <p className="text-white/80 leading-relaxed">
                Ihr Haus in 25 Tagen komplett saniert. Professionell, zuverlässig, hochwertig.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#vorteile" className="text-white/80 hover:text-white transition-colors">
                    Vorteile
                  </a>
                </li>
                <li>
                  <a href="#prozess" className="text-white/80 hover:text-white transition-colors">
                    Prozess
                  </a>
                </li>
                <li>
                  <a href="#kontakt" className="text-white/80 hover:text-white transition-colors">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/impressum" className="text-white/80 hover:text-white transition-colors">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="/datenschutz" className="text-white/80 hover:text-white transition-colors">
                    Datenschutz
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Sanierungssprint25. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
