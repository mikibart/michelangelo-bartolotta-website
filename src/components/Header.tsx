'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Progetti', href: '/progetti' },
  { name: 'Blog', href: '/blog' },
  { name: 'Chi Sono', href: '/chi-siamo' },
  { name: 'Servizi', href: '/servizi' },
  { name: 'Contatti', href: '/contatti' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Linea decorativa top animata */}
      <motion.div
        className="h-0.5 bg-[var(--pencil)]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ transformOrigin: 'left' }}
      />

      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-2xl md:text-3xl font-bold tracking-tight" style={{ fontFamily: "'Architects Daughter', cursive" }}>
                <span className="relative">
                  MB
                  <motion.svg
                    className="absolute -bottom-1 left-0 w-full h-2"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <motion.path
                      d="M0 5 Q 25 0, 50 5 T 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[var(--pencil)]"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </motion.svg>
                </span>
              </span>
              <span className="hidden md:inline ml-3 text-sm text-[var(--muted)]" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                Architetto
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="link-sketch text-lg text-[var(--foreground)] hover:text-[var(--pencil)] transition-colors relative group"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-[var(--pencil)]"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            type="button"
            className="lg:hidden p-2 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">Menu</span>
            <div className="w-7 h-6 flex flex-col justify-between">
              <motion.span
                className="block h-0.5 w-7 bg-[var(--pencil)]"
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 10 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 w-5 bg-[var(--pencil)]"
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 w-7 bg-[var(--pencil)]"
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden py-6 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="sketch-line mb-6" />
              <div className="flex flex-col space-y-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="text-xl text-[var(--foreground)] hover:text-[var(--pencil)] py-2 block"
                      style={{ fontFamily: "'Patrick Hand', cursive" }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      — {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Linea decorativa bottom */}
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-[var(--pencil)] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </motion.header>
  );
}
