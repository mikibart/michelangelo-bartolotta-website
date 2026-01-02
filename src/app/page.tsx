'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import SketchReveal from '@/components/SketchReveal';

const projects = [
  {
    slug: 'casa-sul-lago',
    title: 'Casa sul Lago',
    excerpt: 'Una residenza che dialoga con l\'acqua',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    category: 'Residenziale',
    year: '2024',
  },
  {
    slug: 'centro-culturale-milano',
    title: 'Centro Culturale',
    excerpt: 'Dove l\'arte incontra la comunita',
    coverImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    category: 'Culturale',
    year: '2023',
  },
  {
    slug: 'torre-verde',
    title: 'Torre Verde',
    excerpt: 'Sostenibilita verticale',
    coverImage: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80',
    category: 'Commerciale',
    year: '2024',
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <>
      {/* HERO SECTION - EPICA */}
      <section ref={heroRef} className="relative min-h-screen flex items-start overflow-hidden">
        {/* Background parallax */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80"
            alt="Architettura"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--background)]/92" />

          {/* Pattern griglia che si anima */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
            style={{
              backgroundImage: `
                linear-gradient(var(--pencil) 1px, transparent 1px),
                linear-gradient(90deg, var(--pencil) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </motion.div>

        {/* Contenuto Hero */}
        <motion.div
          className="relative z-10 mx-auto max-w-7xl px-8 lg:px-16 pt-32 pb-20"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="max-w-2xl">
            {/* Icona architetto animata */}
            <motion.svg
              className="w-24 h-24 mb-8"
              viewBox="0 0 100 100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Squadra */}
              <motion.path
                d="M20 80 L20 20 L80 20"
                fill="none"
                stroke="var(--pencil)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              {/* Compasso */}
              <motion.circle
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="var(--pencil)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              {/* Punto centrale */}
              <motion.circle
                cx="50"
                cy="50"
                r="3"
                fill="var(--pencil)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
              />
            </motion.svg>

            {/* Nome con animazione di scrittura */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.h1
                className="text-5xl md:text-8xl text-[var(--foreground)] leading-none"
                style={{ fontFamily: "var(--font-architects-daughter), cursive", textShadow: "2px 2px 4px rgba(255,255,255,0.8)" }}
              >
                <motion.span
                  className="block"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Michelangelo
                </motion.span>
                <motion.span
                  className="block text-[var(--foreground)]/70"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  Bartolotta
                </motion.span>
              </motion.h1>

              {/* Linea animata sotto il nome */}
              <motion.div
                className="h-1 bg-[var(--pencil)] mt-6 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                style={{ maxWidth: '300px' }}
              />
            </motion.div>

            {/* Tagline EPICA */}
            <motion.p
              className="mt-8 text-2xl md:text-4xl text-[var(--foreground)] italic"
              style={{ fontFamily: "var(--font-caveat), cursive", textShadow: "1px 1px 3px rgba(255,255,255,0.8)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              {'"'}Dopo Dio c{"'"}è l{"'"}architetto{'"'}
            </motion.p>

            {/* Sottotitolo */}
            <motion.p
              className="mt-6 text-xl text-[var(--foreground)] max-w-xl"
              style={{ fontFamily: "var(--font-patrick-hand), cursive", textShadow: "1px 1px 2px rgba(255,255,255,0.8)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              Creo spazi che raccontano storie. Ogni linea è un pensiero, ogni progetto è un{"'"}emozione.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              <Link href="/progetti">
                <motion.span
                  className="btn-sketch btn-sketch-filled inline-block"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Scopri i Progetti
                </motion.span>
              </Link>
              <Link href="/contatti">
                <motion.span
                  className="btn-sketch inline-block"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Parliamone
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Mano che disegna - fluttua */}
          <motion.div
            className="absolute right-0 bottom-0 w-64 h-64 opacity-30 hidden lg:block"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Mano stilizzata */}
              <path
                d="M100 180 Q60 160 50 120 Q45 80 70 60 Q90 45 110 50 Q130 45 150 60 Q175 80 170 120 Q160 160 120 180 Z"
                fill="none"
                stroke="var(--pencil)"
                strokeWidth="2"
              />
              {/* Matita */}
              <line x1="130" y1="50" x2="180" y2="0" stroke="var(--pencil)" strokeWidth="3" />
              <polygon points="180,0 185,10 175,10" fill="var(--pencil)" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Scroll indicator animato */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-sm text-[var(--foreground)]/60" style={{ fontFamily: "var(--font-patrick-hand), cursive" }}>
              Scorri
            </span>
            <svg width="24" height="40" viewBox="0 0 24 40" className="text-[var(--pencil)]">
              <motion.path
                d="M12 0 L12 35 M6 29 L12 38 L18 29"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 3.5 }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* SEZIONE PROGETTI */}
      <section className="py-32 relative overflow-hidden">
        {/* Linee decorative animate */}
        <motion.div
          className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--pencil)] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="flex items-end justify-between mb-20">
              <div>
                <motion.span
                  className="text-sm uppercase tracking-widest text-[var(--muted)]"
                  style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
                >
                  Portfolio
                </motion.span>
                <h2
                  className="text-5xl md:text-6xl text-[var(--foreground)] mt-2"
                  style={{ fontFamily: "var(--font-architects-daughter), cursive" }}
                >
                  Progetti Selezionati
                </h2>
                <motion.div
                  className="h-1 w-32 bg-[var(--pencil)] mt-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
              <Link
                href="/progetti"
                className="hidden md:block text-lg text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
              >
                <motion.span whileHover={{ x: 10 }} className="inline-block">
                  Vedi tutti →
                </motion.span>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.slug} delay={index * 0.2} animation="sketch">
                <Link href={`/progetti/${project.slug}`} className="group block">
                  <SketchReveal delay={index * 0.1}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--paper)]">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          className="object-cover sketch-filter group-hover:filter-none transition-all duration-700"
                        />
                      </motion.div>

                      {/* Overlay con info */}
                      <motion.div
                        className="absolute inset-0 bg-[var(--background)]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <span
                          className="text-2xl text-[var(--foreground)]"
                          style={{ fontFamily: "var(--font-architects-daughter), cursive" }}
                        >
                          Scopri →
                        </span>
                      </motion.div>
                    </div>
                  </SketchReveal>

                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p
                      className="text-sm text-[var(--muted)] uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
                    >
                      {project.category} · {project.year}
                    </p>
                    <h3
                      className="text-2xl text-[var(--foreground)] mt-2 group-hover:text-[var(--pencil)] transition-colors"
                      style={{ fontFamily: "var(--font-architects-daughter), cursive" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-lg text-[var(--muted)] mt-2"
                      style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
                    >
                      {project.excerpt}
                    </p>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE CHI SONO */}
      <section className="py-32 bg-[var(--paper)] relative">
        {/* Pattern blueprint */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(var(--pencil) 1px, transparent 1px),
              linear-gradient(90deg, var(--pencil) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="relative">
                <SketchReveal>
                  <div className="aspect-square relative">
                    <Image
                      src="/images/michelangelo-bartolotta.png"
                      alt="Michelangelo Bartolotta"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </SketchReveal>

                {/* Firma animata */}
                <motion.svg
                  className="absolute -bottom-10 -right-10 w-40 h-20"
                  viewBox="0 0 200 80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.path
                    d="M20 60 Q50 20, 80 40 T140 30 Q160 25, 180 35"
                    fill="none"
                    stroke="var(--pencil)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                  />
                </motion.svg>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={0.3}>
              <span
                className="text-sm uppercase tracking-widest text-[var(--foreground)]/60"
                style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
              >
                L{"'"}Architetto
              </span>
              <h2
                className="text-4xl md:text-5xl text-[var(--foreground)] mt-2"
                style={{ fontFamily: "var(--font-architects-daughter), cursive" }}
              >
                La mia visione
              </h2>

              <motion.div
                className="h-1 w-24 bg-[var(--pencil)] mt-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ transformOrigin: 'left' }}
              />

              <p
                className="text-xl text-[var(--foreground)]/70 mt-8 leading-relaxed"
                style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
              >
                Ogni progetto nasce da un dialogo. Con il cliente, con il luogo, con la luce.
                Non disegno edifici, racconto storie attraverso gli spazi.
              </p>

              <p
                className="text-xl text-[var(--foreground)]/70 mt-4 leading-relaxed"
                style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
              >
                Da oltre 15 anni trasformo visioni in realta costruite,
                unendo tradizione e innovazione in ogni tratto di matita.
              </p>

              <Link href="/chi-siamo">
                <motion.span
                  className="btn-sketch inline-block mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Scopri di piu
                </motion.span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection animation="scale">
            <motion.div
              className="relative bg-[var(--pencil)] text-[var(--background)] px-8 py-20 md:px-20 text-center"
              whileHover={{ rotate: -0.5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Bordi decorativi */}
              <div className="absolute inset-4 border border-[var(--background)]/30" />

              {/* Angoli */}
              {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos, i) => (
                <motion.div
                  key={pos}
                  className={`absolute ${pos} w-6 h-6`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-full h-full ${
                    i === 0 ? 'border-t-2 border-l-2' :
                    i === 1 ? 'border-t-2 border-r-2' :
                    i === 2 ? 'border-b-2 border-l-2' :
                    'border-b-2 border-r-2'
                  } border-[var(--background)]`} />
                </motion.div>
              ))}

              <motion.h2
                className="text-4xl md:text-6xl"
                style={{ fontFamily: "var(--font-architects-daughter), cursive" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Hai un{"'"}idea?
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl mt-4 opacity-80"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Trasformiamola insieme in architettura
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Link href="/contatti">
                  <motion.span
                    className="inline-block mt-10 px-10 py-4 bg-[var(--background)] text-[var(--pencil)] text-xl"
                    style={{ fontFamily: "var(--font-architects-daughter), cursive" }}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Iniziamo a disegnare
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
