'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SketchReveal from '@/components/SketchReveal';

const milestones = [
  { year: '1995', event: 'Laurea in Architettura' },
  { year: '2000', event: 'Apertura dello studio' },
  { year: '2008', event: 'Premio Architettura Contemporanea' },
  { year: '2015', event: 'Progetto Centro Culturale Milano' },
  { year: '2020', event: '25 anni di carriera' },
  { year: '2024', event: 'Oltre 100 progetti realizzati' },
];

const skills = [
  'Progettazione Architettonica',
  'Interior Design',
  'Restauro Conservativo',
  'Architettura Sostenibile',
  'Urban Planning',
  'Consulenza Tecnica',
];

export default function ChiSonoPage() {
  return (
    <div className="py-16">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="slideLeft">
            <div className="relative">
              <SketchReveal>
                <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
                  <Image
                    src="/images/michelangelo-bartolotta.png"
                    alt="Michelangelo Bartolotta"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </SketchReveal>

              {/* Firma */}
              <motion.svg
                className="absolute -bottom-8 right-0 w-48 h-16"
                viewBox="0 0 200 60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.path
                  d="M20 50 Q60 10, 100 40 T180 30"
                  fill="none"
                  stroke="var(--pencil)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
              </motion.svg>

              {/* Decorazione */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[var(--pencil)] opacity-30" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideRight" delay={0.3}>
            <motion.span
              className="text-sm uppercase tracking-widest text-[var(--muted)]"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              L{"'"}Architetto
            </motion.span>

            <h1
              className="text-5xl md:text-6xl text-[var(--foreground)] mt-4"
              style={{ fontFamily: "'Architects Daughter', cursive" }}
            >
              Michelangelo
              <br />
              <span className="text-[var(--muted)]">Bartolotta</span>
            </h1>

            <motion.div
              className="h-1 w-32 bg-[var(--pencil)] mt-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ transformOrigin: 'left' }}
            />

            <p
              className="text-2xl text-[var(--foreground)] mt-8 italic"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              {'"'}Dopo Dio c{"'"}è l{"'"}architetto{'"'}
            </p>

            <p
              className="text-xl text-[var(--muted)] mt-6 leading-relaxed"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              Architetto per vocazione, visionario per natura. Da oltre 25 anni trasformo
              idee in spazi che respirano, edifici che raccontano storie, luoghi che
              diventano casa.
            </p>

            <p
              className="text-xl text-[var(--muted)] mt-4 leading-relaxed"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              Ogni tratto di matita è un pensiero. Ogni progetto è un dialogo
              tra la mia visione e le esigenze di chi lo abiterà.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filosofia */}
      <section className="bg-[var(--pencil)] text-[var(--background)] py-24 mb-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(var(--background) 1px, transparent 1px),
              linear-gradient(90deg, var(--background) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <AnimatedSection animation="fadeUp">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="text-4xl md:text-5xl mb-8"
                style={{ fontFamily: "'Architects Daughter', cursive" }}
              >
                La Mia Filosofia
              </h2>

              <p
                className="text-xl md:text-2xl leading-relaxed opacity-90"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                Non costruisco edifici. Creo esperienze. Ogni spazio che progetto
                nasce dall{"'"}ascolto: del cliente, del luogo, della luce.
                L{"'"}architettura per me è poesia costruita, è dare forma ai sogni
                rispettando la terra che li accoglie.
              </p>

              <motion.svg
                className="mx-auto mt-12 w-24 h-24 opacity-30"
                viewBox="0 0 100 100"
              >
                <motion.path
                  d="M20 80 L20 20 L80 20 M50 50 L50 80 M30 60 L70 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                />
              </motion.svg>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
        <AnimatedSection animation="fadeUp">
          <h2
            className="text-4xl text-[var(--foreground)] text-center mb-16"
            style={{ fontFamily: "'Architects Daughter', cursive" }}
          >
            Il Percorso
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Linea centrale */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--pencil)] -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <AnimatedSection
                key={milestone.year}
                animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'}
                delay={index * 0.1}
              >
                <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span
                      className="text-3xl text-[var(--pencil)]"
                      style={{ fontFamily: "'Architects Daughter', cursive" }}
                    >
                      {milestone.year}
                    </span>
                    <p
                      className="text-lg text-[var(--muted)] mt-1"
                      style={{ fontFamily: "'Patrick Hand', cursive" }}
                    >
                      {milestone.event}
                    </p>
                  </div>

                  <motion.div
                    className="w-4 h-4 rounded-full bg-[var(--pencil)] relative z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  />

                  <div className="flex-1" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Competenze */}
      <section className="bg-[var(--paper)] py-24 mb-32 relative">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(var(--pencil) 1px, transparent 1px),
              linear-gradient(90deg, var(--pencil) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <AnimatedSection animation="fadeUp">
            <h2
              className="text-4xl text-[var(--foreground)] text-center mb-16"
              style={{ fontFamily: "'Architects Daughter', cursive" }}
            >
              Competenze
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill} animation="scale" delay={index * 0.1}>
                <motion.div
                  className="p-6 bg-[var(--background)] relative group"
                  whileHover={{ rotate: -1, scale: 1.02 }}
                >
                  <div className="absolute inset-0 border-2 border-[var(--pencil)] opacity-50 group-hover:opacity-100 transition-opacity" />
                  <p
                    className="text-xl text-[var(--foreground)] relative z-10"
                    style={{ fontFamily: "'Architects Daughter', cursive" }}
                  >
                    {skill}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection animation="scale">
          <motion.div
            className="text-center py-16"
            whileHover={{ rotate: -0.3 }}
          >
            <h2
              className="text-4xl md:text-5xl text-[var(--foreground)]"
              style={{ fontFamily: "'Architects Daughter', cursive" }}
            >
              Costruiamo insieme
            </h2>

            <p
              className="text-xl text-[var(--muted)] mt-4 max-w-xl mx-auto"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              Hai un{"'"}idea, un terreno, un sogno? Parliamone davanti a un foglio bianco.
            </p>

            <Link href="/contatti">
              <motion.span
                className="btn-sketch btn-sketch-filled inline-block mt-8"
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                Contattami
              </motion.span>
            </Link>
          </motion.div>
        </AnimatedSection>
      </section>
    </div>
  );
}
