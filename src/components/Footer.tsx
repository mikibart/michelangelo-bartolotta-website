'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Progetti', href: '/progetti' },
    { name: 'Blog', href: '/blog' },
    { name: 'Chi Sono', href: '/chi-siamo' },
  ],
  services: [
    { name: 'Servizi', href: '/servizi' },
    { name: 'Contatti', href: '/contatti' },
  ],
  social: [
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Pinterest', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[var(--pencil)] text-[var(--background)] overflow-hidden">
      {/* Pattern decorativo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(var(--background) 1px, transparent 1px),
            linear-gradient(90deg, var(--background) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <motion.span
                className="text-3xl font-bold tracking-tight"
                style={{ fontFamily: "'Architects Daughter', cursive" }}
                whileHover={{ scale: 1.05 }}
              >
                MB
              </motion.span>
            </Link>

            <p
              className="mt-4 text-base opacity-70 leading-relaxed"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              Michelangelo Bartolotta
              <br />
              Architetto
            </p>

            <p
              className="mt-4 text-lg italic opacity-50"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              {'"'}Dopo Dio c{"'"}è l{"'"}architetto{'"'}
            </p>

            {/* Firma animata */}
            <motion.svg
              className="mt-6 w-32 h-12 opacity-30"
              viewBox="0 0 150 50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.path
                d="M10 40 Q40 10, 70 30 T130 20"
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

          {/* Navigation */}
          <div>
            <h3
              className="text-sm uppercase tracking-widest opacity-50 mb-6"
              style={{ fontFamily: "'Architects Daughter', cursive" }}
            >
              Navigazione
            </h3>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-base opacity-70 hover:opacity-100 transition-opacity"
                    style={{ fontFamily: "'Patrick Hand', cursive" }}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-sm uppercase tracking-widest opacity-50 mb-6"
              style={{ fontFamily: "'Architects Daughter', cursive" }}
            >
              Info
            </h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-base opacity-70 hover:opacity-100 transition-opacity"
                    style={{ fontFamily: "'Patrick Hand', cursive" }}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3
              className="text-sm uppercase tracking-widest opacity-50 mb-6"
              style={{ fontFamily: "'Architects Daughter', cursive" }}
            >
              Social
            </h3>
            <ul className="space-y-4">
              {footerLinks.social.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-base opacity-70 hover:opacity-100 transition-opacity"
                    style={{ fontFamily: "'Patrick Hand', cursive" }}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          className="mt-20 pt-8 border-t border-[var(--background)]/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-sm opacity-50"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              &copy; {new Date().getFullYear()} Michelangelo Bartolotta. Tutti i diritti riservati.
            </p>
            <p
              className="text-sm opacity-50"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              michelangelo-bartolotta.com
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorazione angoli */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[var(--background)]/20" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[var(--background)]/20" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[var(--background)]/20" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[var(--background)]/20" />
    </footer>
  );
}
