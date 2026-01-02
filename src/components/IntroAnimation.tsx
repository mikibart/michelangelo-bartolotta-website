'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),    // Mostra mano
      setTimeout(() => setPhase(2), 1500),   // Inizia a disegnare
      setTimeout(() => setPhase(3), 4000),   // Mostra nome
      setTimeout(() => setPhase(4), 6000),   // Mostra tagline
      setTimeout(() => {
        setPhase(5);
        setTimeout(onComplete, 1000);
      }, 8000), // Fade out
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // Path del nome "MB" stilizzato
  const namePath = "M 50 150 L 50 50 L 80 100 L 110 50 L 110 150 M 150 50 L 150 150 L 200 150 L 200 100 L 150 100 L 200 50 L 150 50";

  // Path di un edificio stilizzato
  const buildingPath = "M 250 150 L 250 80 L 280 50 L 310 80 L 310 150 M 265 150 L 265 120 L 295 120 L 295 150 M 270 90 L 270 70 M 290 90 L 290 70";

  return (
    <AnimatePresence>
      {phase < 5 && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[var(--background)] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Texture carta */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Contenuto centrale */}
          <div className="relative">
            {/* SVG con il disegno */}
            <svg
              viewBox="0 0 400 200"
              className="w-[80vw] max-w-[600px] h-auto"
            >
              {/* Nome MB che si disegna */}
              {phase >= 2 && (
                <motion.path
                  d={namePath}
                  fill="none"
                  stroke="var(--pencil)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              )}

              {/* Edificio stilizzato */}
              {phase >= 2 && (
                <motion.path
                  d={buildingPath}
                  fill="none"
                  stroke="var(--pencil)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                />
              )}

              {/* Linea decorativa sotto */}
              {phase >= 2 && (
                <motion.line
                  x1="40"
                  y1="170"
                  x2="360"
                  y2="170"
                  stroke="var(--pencil)"
                  strokeWidth="1"
                  strokeDasharray="5 5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 2.5 }}
                />
              )}
            </svg>

            {/* Mano con matita */}
            {phase >= 1 && phase < 5 && (
              <motion.div
                className="absolute"
                initial={{ x: '100vw', y: 50 }}
                animate={{
                  x: phase >= 2 ? [300, 100, 200, 350, 200] : 300,
                  y: phase >= 2 ? [50, 80, 60, 100, 50] : 50,
                }}
                transition={{
                  duration: phase >= 2 ? 4 : 0.8,
                  ease: "easeInOut",
                }}
              >
                <svg width="120" height="120" viewBox="0 0 120 120">
                  {/* Mano */}
                  <g transform="rotate(-30, 60, 60)">
                    {/* Palmo */}
                    <ellipse cx="60" cy="70" rx="25" ry="30" fill="#f5d6ba" stroke="#d4a574" strokeWidth="1" />

                    {/* Pollice */}
                    <ellipse cx="35" cy="55" rx="8" ry="15" fill="#f5d6ba" stroke="#d4a574" strokeWidth="1" transform="rotate(-20, 35, 55)" />

                    {/* Dita */}
                    <ellipse cx="45" cy="35" rx="6" ry="18" fill="#f5d6ba" stroke="#d4a574" strokeWidth="1" />
                    <ellipse cx="58" cy="32" rx="6" ry="20" fill="#f5d6ba" stroke="#d4a574" strokeWidth="1" />
                    <ellipse cx="72" cy="35" rx="6" ry="18" fill="#f5d6ba" stroke="#d4a574" strokeWidth="1" />
                    <ellipse cx="83" cy="42" rx="5" ry="14" fill="#f5d6ba" stroke="#d4a574" strokeWidth="1" />

                    {/* Matita nella mano */}
                    <g transform="translate(50, 20) rotate(45)">
                      <rect x="0" y="0" width="6" height="35" fill="#f4d03f" stroke="#2a2a2a" strokeWidth="0.5" />
                      <rect x="0" y="0" width="6" height="5" fill="#e74c3c" />
                      <polygon points="0,35 6,35 3,45" fill="#f5d6ba" stroke="#2a2a2a" strokeWidth="0.5" />
                      <polygon points="2,40 4,40 3,45" fill="#2a2a2a" />
                    </g>
                  </g>
                </svg>

                {/* Particelle mentre disegna */}
                {phase >= 2 && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[var(--pencil)] rounded-full"
                        style={{ left: 80, top: 90 }}
                        animate={{
                          x: [0, (Math.random() - 0.5) * 20],
                          y: [0, Math.random() * 20],
                          opacity: [1, 0],
                          scale: [1, 0],
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            )}

            {/* Nome completo */}
            {phase >= 3 && (
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 text-center"
                style={{ top: '220px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1
                  className="text-4xl md:text-6xl text-[var(--foreground)]"
                  style={{ fontFamily: "'Architects Daughter', cursive" }}
                >
                  Michelangelo Bartolotta
                </h1>
              </motion.div>
            )}

            {/* Tagline */}
            {phase >= 4 && (
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 text-center"
                style={{ top: '300px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <p
                  className="text-xl md:text-2xl text-[var(--muted)] italic"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  "Dopo Dio c'è l'architetto"
                </p>
              </motion.div>
            )}
          </div>

          {/* Skip button */}
          <motion.button
            className="absolute bottom-8 right-8 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
            onClick={onComplete}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Salta intro →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
