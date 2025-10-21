"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, X } from "lucide-react"
import { useState, useEffect } from "react"

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
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [navDark, setNavDark] = useState(false)

  const images = [
    { src: "/vorher-1.jpg", label: "RAUM 01" },
    { src: "/vorher-2.jpg", label: "FLUR" },
    { src: "/vorher-3.jpg", label: "RAUM 02" },
    { src: "/vorher-4.jpg", label: "BAD" }
  ]

  // Handle scroll to change nav color based on background
  useEffect(() => {
    const handleScroll = () => {
      // Check if we're in a white section (services, project, contact)
      const servicesSection = document.getElementById('services')
      const projectSection = document.getElementById('referenzprojekt')
      const contactSection = document.getElementById('kontakt')

      let isOnWhiteBg = false

      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          isOnWhiteBg = true
        }
      }

      if (projectSection) {
        const rect = projectSection.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          isOnWhiteBg = true
        }
      }

      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          isOnWhiteBg = true
        }
      }

      setNavDark(isOnWhiteBg)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'Escape') closeLightbox()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')
    setFormMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setFormStatus('success')
        setFormMessage('Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setFormStatus('error')
        setFormMessage(data.error || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
      }
    } catch (error) {
      setFormStatus('error')
      setFormMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 lg:px-12 py-6">
        <div className="flex justify-between items-center">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-sm font-light tracking-[0.2em] hover:text-accent transition-colors cursor-pointer ${navDark ? 'text-black' : 'text-white'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            sanierungssprint25
          </motion.button>
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex flex-col justify-center items-center gap-1.5 group relative z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            aria-label="Menu"
          >
            <span className={`w-6 h-[1px] transition-all group-hover:w-8 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''} ${navDark ? 'bg-black' : 'bg-white'}`}></span>
            <span className={`w-6 h-[1px] transition-all group-hover:w-8 ${menuOpen ? 'opacity-0' : ''} ${navDark ? 'bg-black' : 'bg-white'}`}></span>
            <span className={`w-6 h-[1px] transition-all group-hover:w-8 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''} ${navDark ? 'bg-black' : 'bg-white'}`}></span>
          </motion.button>
        </div>
      </nav>

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-8 right-8 z-[110] text-white hover:text-gray-400 transition-colors"
              aria-label="Schließen"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-8 left-8 z-[110] text-white text-sm tracking-[0.3em]">
              {currentImageIndex + 1} / {images.length}
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-8 z-[110] text-white hover:text-gray-400 transition-colors"
              aria-label="Vorheriges Bild"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-8 z-[110] text-white hover:text-gray-400 transition-colors"
              aria-label="Nächstes Bild"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              className="relative max-w-7xl max-h-[90vh] mx-auto px-20"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              key={currentImageIndex}
            >
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].label}
                className="w-full h-full object-contain"
              />
              <div className="text-center mt-6 text-white text-sm tracking-[0.2em]">
                {images[currentImageIndex].label}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-[55] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <nav className="space-y-8">
                {[
                  { label: 'HOME', id: 'top' },
                  { label: 'SERVICES', id: 'services' },
                  { label: 'PROZESS', id: 'prozess' },
                  { label: 'REFERENZPROJEKT', id: 'referenzprojekt' },
                  { label: 'KONTAKT', id: 'kontakt' }
                ].map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => item.id === 'top' ? (setMenuOpen(false), window.scrollTo({ top: 0, behavior: 'smooth' })) : scrollToSection(item.id)}
                    className="block text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-white hover:text-accent transition-all duration-300 w-full"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              <motion.div
                className="mt-16 pt-8 border-t border-white/10 space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div>
                  <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-4">KONTAKT</p>
                  <a href="mailto:info@sanierungssprint25.de" className="text-sm text-white/60 hover:text-white transition-colors">
                    info@sanierungssprint25.de
                  </a>
                </div>

                <div>
                  <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-4">RECHTLICHES</p>
                  <div className="flex flex-col gap-3">
                    <a href="/impressum" className="text-sm text-white/60 hover:text-white transition-colors">
                      Impressum
                    </a>
                    <a href="/agb" className="text-sm text-white/60 hover:text-white transition-colors">
                      AGB
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Fullscreen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background - Vorher/Nachher Haus */}
        <div className="absolute inset-0 z-0">
          {/* Hauptbild - Vorher/Nachher Haus */}
          <div className="absolute inset-0">
            <img
              src="/hero-house.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dunkler Overlay für Textlesbarkeit */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>

          {/* Subtile Vignette an den Rändern */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_100%)] opacity-50 z-10"></div>
        </div>

        <motion.div
          className="relative z-10 text-center px-6"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          {/* Main Headline - Large Letter Spacing */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[0.15em] lg:tracking-[0.2em] mb-12 text-white"
            variants={fadeIn}
          >
            <span className="block">SANIERUNG</span>
            <span className="block mt-2">IN 25 TAGEN</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-sm md:text-base tracking-[0.3em] text-gray-300 uppercase mb-16 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Professionelle Komplettsanierung. Schnell. Zuverlässig. Hochwertig.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeIn}
          >
            <button
              onClick={() => scrollToSection('referenzprojekt')}
              className="px-8 py-3 bg-white text-black text-sm tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
            >
              PROJEKT
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="px-8 py-3 border border-white text-white text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              GET IN TOUCH
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative min-h-screen bg-white text-black py-20 overflow-hidden">
        {/* Verblassender Hintergrund - Subtil und Elegant */}
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.08]">
            <img
              src="/vorher-3.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Gradient Fade - Links komplett transparent, rechts sichtbar */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
            {/* Top/Bottom Fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50"></div>
          </div>
        </div>

        {/* Section Header */}
        <div className="relative z-10 flex justify-between items-center px-8 lg:px-12 mb-16">
          <motion.div
            className="text-xs tracking-[0.3em] uppercase"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            SERVICES
          </motion.div>
          <motion.div
            className="text-xs tracking-[0.3em] text-gray-400"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            [SCTB-01]
          </motion.div>
        </div>

        {/* Services Content */}
        <div className="relative z-10 px-8 lg:px-12 max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-light mb-20 max-w-4xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            WIR SANIEREN IHR HAUS IN REKORDZEIT UND VERWANDELN IHRE VISION IN REALITÄT
          </motion.h2>

          {/* Service Card */}
          <motion.div
            className="relative bg-zinc-900 text-white p-8 lg:p-12 rounded-none overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')] bg-cover bg-center"></div>
            </div>

            <div className="relative z-10">
              {/* Service Title */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2">[SNRG-01]</div>
                  <h3 className="text-2xl md:text-3xl tracking-[0.1em] uppercase">25-TAGE KOMPLETTSANIERUNG</h3>
                </div>
                <button className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              {/* Service Description */}
              <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed text-gray-300">
                <p>
                  Unsere Komplettlösungen sind ideal für Hausbesitzer, Immobilienentwickler und Renovierungsexperten.
                  Wir koordinieren alle Gewerke präzise, um Ihre Projekte effektiv zu präsentieren und zu realisieren –
                  mit realistischen Zeitplänen und höchster Qualität.
                </p>
                <p>
                  Das Sanierungssprint25-Studio bietet Services für selbst die anspruchsvollsten Projekte.
                  Von der ersten Planung bis zur Schlüsselübergabe – wir spezialisieren uns auf hochwertige
                  Sanierung und Koordination aller Bauphasen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="prozess" className="relative min-h-screen bg-black text-white py-20">
        <div className="px-8 lg:px-12 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-16">
            <motion.div
              className="text-xs tracking-[0.3em] uppercase"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              PROZESS
            </motion.div>
            <motion.div
              className="text-xs tracking-[0.3em] text-gray-400"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              [PRCS-01]
            </motion.div>
          </div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-light mb-20 max-w-4xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            IN VIER KLAREN SCHRITTEN ZUM NEUEN ZUHAUSE
          </motion.h2>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "ERSTGESPRÄCH", desc: "Wir analysieren Ihr Objekt und besprechen Ihre individuellen Wünsche und Anforderungen." },
              { num: "02", title: "PLANUNG", desc: "Detaillierte Planung aller Gewerke und präzise Koordination der Zeitabläufe." },
              { num: "03", title: "UMSETZUNG", desc: "25 Tage koordinierte Sanierung mit laufender Qualitätskontrolle und Dokumentation." },
              { num: "04", title: "ÜBERGABE", desc: "Schlüsselfertig und bereit für Ihr neues Leben in Ihrem sanierten Haus." }
            ].map((step, i) => (
              <motion.div
                key={i}
                className="border-t border-gray-800 pt-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-5xl font-light text-gray-700 mb-4">{step.num}</div>
                <h3 className="text-xl tracking-[0.15em] mb-4">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase - Bielefeld Ummeln */}
      <section id="referenzprojekt" className="relative min-h-screen bg-white text-black py-20">
        <div className="px-8 lg:px-12 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-16">
            <motion.div
              className="text-xs tracking-[0.3em] uppercase"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              REFERENZPROJEKT
            </motion.div>
            <motion.div
              className="text-xs tracking-[0.3em] text-gray-400"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              [PRJCT-01]
            </motion.div>
          </div>

          {/* Before State Gallery */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xs tracking-[0.3em] uppercase text-gray-400">AUSGANGSZUSTAND</h3>
              <span className="text-xs tracking-[0.3em] text-gray-400">2024</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="relative aspect-[4/3] overflow-hidden bg-gray-100 group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-xs tracking-[0.2em] text-white">{img.label}</span>
                    </div>
                  </div>
                  {/* Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project Content - Asymmetric Layout */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
            {/* Left - Project Image */}
            <motion.div
              className="relative overflow-hidden order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400">TRANSFORMATION / 25 TAGE</span>
              </div>
              <img
                src="/projekt-bielefeld.jpg"
                alt="Sanierungsprojekt Bielefeld Ummeln - Vorher Nachher"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Right - Project Info */}
            <motion.div
              className="space-y-12 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
                  BIELEFELD UMMELN
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                  <p>
                    Ein ambitioniertes Pilotprojekt, das zeigt, was durch perfekte Koordination
                    und präzise Planung möglich ist. In nur 25 Tagen wurde dieses Einfamilienhaus
                    in Bielefeld-Ummeln von Grund auf saniert und energetisch optimiert.
                  </p>
                  <p>
                    Von der energetischen Beratung über den Rückbau, die Installation modernster
                    Haustechnik bis zur finalen Raumgestaltung – jedes Gewerk griff nahtlos ineinander.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-6">ERGEBNIS</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-600 tracking-wider">PROJEKTDAUER</span>
                    <span className="font-medium">25 TAGE</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-600 tracking-wider">STANDORT</span>
                    <span className="font-medium">BIELEFELD-UMMELN</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-600 tracking-wider">FERTIGSTELLUNG</span>
                    <span className="font-medium">2025</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-600 tracking-wider">BETEILIGTE</span>
                    <span className="font-medium">9 UNTERNEHMEN</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Partner Companies */}
          <motion.div
            className="border-t border-gray-200 pt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-light mb-12 tracking-wide text-center">UNSERE PROJEKTPARTNER</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "nex|e|con",
                  role: "Energetische Sanierungsberatung",
                  url: "https://nexecon.de"
                },
                {
                  name: "Rückbau PRO",
                  role: "Professioneller Rückbau",
                  url: "https://www.rueckbaupro.de"
                },
                {
                  name: "Rümpelschmiede",
                  role: "Entrümpelung & Entsorgung",
                  url: "https://www.ruempel-schmiede.de"
                },
                {
                  name: "Kreuzer",
                  role: "Qualität | Handwerk | Vertrauen",
                  url: "https://www.kreuzer-handwerk.de"
                },
                {
                  name: "Energie Welt Friesen",
                  role: "Photovoltaik & Energiesysteme",
                  url: "https://www.energieweltfriesen.de"
                },
                {
                  name: "DÜCK",
                  role: "Heizung | Sanitär | Bad",
                  url: "https://www.dueck-haustechnik.de"
                },
                {
                  name: "Dein Leben ist dein Projekt",
                  role: "Projektkoordination & Konzeption",
                  url: "#"
                },
                {
                  name: "Raumgestaltung Fuhrmann",
                  role: "Innenausstattung & Design",
                  url: "https://www.raumgestaltung-fuhrmann.de"
                },
                {
                  name: "JANZEN",
                  role: "Dach- und Holzbau Meisterbetrieb",
                  url: "https://janzen-zimmerei.de"
                }
              ].map((partner, i) => (
                <motion.a
                  key={i}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-gray-200 p-6 hover:border-black transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                >
                  <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h4 className="text-base font-medium mb-2 tracking-wide group-hover:text-accent transition-colors">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {partner.role}
                  </p>
                  <div className="mt-4 flex items-center text-xs tracking-wider text-gray-400 group-hover:text-black transition-colors">
                    <span>WEBSITE</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="relative min-h-screen bg-white text-black py-20">
        <div className="px-8 lg:px-12 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-16">
            <motion.div
              className="text-xs tracking-[0.3em] uppercase"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              KONTAKT
            </motion.div>
            <motion.div
              className="text-xs tracking-[0.3em] text-gray-400"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              [CNTC-01]
            </motion.div>
          </div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-light mb-20 max-w-4xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            BEREIT FÜR IHRE SANIERUNG?
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2">TELEFON</div>
                <div className="text-xl">+49 174 8083023</div>
              </div>
              <div>
                <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2">E-MAIL</div>
                <div className="text-xl">info@sanierungssprint25.de</div>
              </div>
              <div>
                <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2">STANDORT</div>
                <div className="text-xl">Bundesweit tätig</div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <input
                  type="text"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-black py-3 text-sm tracking-[0.2em] placeholder:text-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-MAIL"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-black py-3 text-sm tracking-[0.2em] placeholder:text-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="NACHRICHT"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-black py-3 text-sm tracking-[0.2em] placeholder:text-gray-400 focus:outline-none focus:border-gray-600 transition-colors resize-none"
                ></textarea>
              </div>

              {formMessage && (
                <div className={`text-sm tracking-wide ${formStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {formMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="px-8 py-3 bg-black text-white text-sm tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'loading' ? 'WIRD GESENDET...' : 'SENDEN'}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8 text-sm">
            <div>
              <div className="tracking-[0.2em] mb-4">SANIERUNGSSPRINT25</div>
              <p className="text-gray-400 text-xs">
                Ihr Haus in 25 Tagen komplett saniert.
              </p>
            </div>
            <div>
              <div className="tracking-[0.2em] text-xs mb-4">NAVIGATION</div>
              <ul className="space-y-2 text-gray-400 text-xs">
                <li><a href="#services" className="hover:text-white transition-colors">SERVICES</a></li>
                <li><a href="#prozess" className="hover:text-white transition-colors">PROZESS</a></li>
                <li><a href="#kontakt" className="hover:text-white transition-colors">KONTAKT</a></li>
              </ul>
            </div>
            <div>
              <div className="tracking-[0.2em] text-xs mb-4">RECHTLICHES</div>
              <ul className="space-y-2 text-gray-400 text-xs">
                <li><a href="/impressum" className="hover:text-white transition-colors">IMPRESSUM</a></li>
                <li><a href="/datenschutz" className="hover:text-white transition-colors">DATENSCHUTZ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} SANIERUNGSSPRINT25. ALLE RECHTE VORBEHALTEN.
          </div>
        </div>
      </footer>
    </main>
  )
}
