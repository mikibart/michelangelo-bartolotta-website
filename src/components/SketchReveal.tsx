'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface SketchRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function SketchReveal({ children, className = '', delay = 0 }: SketchRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Contenuto */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
      >
        {children}
      </motion.div>

      {/* Bordo che si disegna */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <motion.rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          fill="none"
          stroke="var(--pencil)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ width: 'calc(100% - 4px)', height: 'calc(100% - 4px)' }}
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.5, delay, ease: 'easeInOut' }}
        />
      </svg>

      {/* Angoli decorativi animati */}
      {['top-1 left-1', 'top-1 right-1', 'bottom-1 left-1', 'bottom-1 right-1'].map((pos, i) => (
        <motion.div
          key={pos}
          className={`absolute ${pos} w-4 h-4`}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: delay + 0.8 + i * 0.1 }}
        >
          <div
            className={`w-full h-full ${
              i === 0 ? 'border-t-2 border-l-2' :
              i === 1 ? 'border-t-2 border-r-2' :
              i === 2 ? 'border-b-2 border-l-2' :
              'border-b-2 border-r-2'
            } border-[var(--pencil)]`}
          />
        </motion.div>
      ))}
    </div>
  );
}
