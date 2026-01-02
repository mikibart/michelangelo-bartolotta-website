'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

const contactInfo = [
  {
    title: 'Email',
    value: 'michelangelo@atomoprogetti.it',
    href: 'mailto:michelangelo@atomoprogetti.it',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Telefono',
    value: '+39 339 5896023',
    href: 'tel:+393395896023',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Indirizzo',
    value: 'Via Domenico Scinà n. 28',
    description: '90139 Palermo (PA)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Orari',
    value: 'Lun - Ven',
    description: '9:00 - 18:00',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ContattiPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="fadeUp">
          <div className="max-w-2xl mb-16">
            <motion.span
              className="text-sm uppercase tracking-widest text-[var(--foreground)]/60"
              style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
            >
              Parliamone
            </motion.span>
            <h1
              className="text-4xl md:text-5xl text-[var(--foreground)] mt-2"
              style={{ fontFamily: "var(--font-architects-daughter), cursive" }}
            >
              Contatti
            </h1>
            <motion.div
              className="h-1 w-24 bg-[var(--pencil)] mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              style={{ transformOrigin: 'left' }}
            />
            <p
              className="text-xl text-[var(--foreground)]/70 mt-6 leading-relaxed"
              style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
            >
              Hai un progetto in mente? Un terreno da trasformare? O semplicemente
              vuoi scambiare due parole sull{"'"}architettura? Sono qui.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <AnimatedSection animation="slideLeft">
              <h2
                className="text-2xl text-[var(--foreground)] mb-8"
                style={{ fontFamily: "var(--font-architects-daughter), cursive" }}
              >
                Scrivimi
              </h2>
              <ContactForm />
            </AnimatedSection>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <AnimatedSection animation="slideRight" delay={0.2}>
              <h2
                className="text-2xl text-[var(--foreground)] mb-8"
                style={{ fontFamily: "var(--font-architects-daughter), cursive" }}
              >
                Informazioni
              </h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="text-[var(--pencil)] mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3
                        className="text-sm uppercase tracking-wider text-[var(--foreground)]/60 mb-1"
                        style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
                      >
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg text-[var(--foreground)] hover:text-[var(--pencil)] transition-colors"
                          style={{ fontFamily: "var(--font-architects-daughter), cursive" }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p
                          className="text-lg text-[var(--foreground)]"
                          style={{ fontFamily: "var(--font-architects-daughter), cursive" }}
                        >
                          {info.value}
                        </p>
                      )}
                      {info.description && (
                        <p
                          className="text-sm text-[var(--foreground)]/60"
                          style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
                        >
                          {info.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social - Coming Soon */}
              <motion.div
                className="p-4 border-2 border-dashed border-[var(--pencil)] opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.7 }}
              >
                <p
                  className="text-base text-[var(--foreground)] italic text-center"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  Seguici sui social - Prossimamente
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>

        {/* Map */}
        <AnimatedSection animation="fadeUp" delay={0.4}>
          <div className="mt-20">
            <h2
              className="text-2xl text-[var(--foreground)] mb-6"
              style={{ fontFamily: "var(--font-architects-daughter), cursive" }}
            >
              Dove trovarmi
            </h2>
            <div className="relative">
              <div className="absolute -inset-2 border-2 border-[var(--pencil)] opacity-30"
                   style={{ transform: 'rotate(0.3deg)' }} />
              <div className="relative aspect-[21/9] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.0!2d13.361!3d38.116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ef3d9d0e8b15%3A0x1c0c7f8e3a8b9e0a!2sVia%20Domenico%20Scin%C3%A0%2C%2028%2C%2090139%20Palermo%20PA!5e0!3m2!1sit!2sit!4v1704200000000!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Michelangelo Bartolotta - Palermo"
                />
              </div>
              <motion.p
                className="text-center mt-4 text-[var(--foreground)]/60"
                style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
              >
                Via Domenico Scinà n. 28, 90139 Palermo
              </motion.p>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fadeUp" delay={0.5}>
          <motion.div
            className="mt-16 text-center py-12 relative"
            whileHover={{ rotate: -0.3 }}
          >
            <div className="absolute inset-0 border-t-2 border-b-2 border-[var(--pencil)] opacity-20" />
            <p
              className="text-2xl text-[var(--foreground)] italic"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              {'"'}Ogni grande progetto inizia con una conversazione{'"'}
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
}
