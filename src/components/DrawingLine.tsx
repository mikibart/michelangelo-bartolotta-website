'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface DrawingLineProps {
  path: string;
  className?: string;
  duration?: number;
  delay?: number;
  strokeWidth?: number;
  color?: string;
}

export default function DrawingLine({
  path,
  className = '',
  duration = 2,
  delay = 0,
  strokeWidth = 2,
  color = 'var(--pencil)',
}: DrawingLineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <svg ref={ref} className={className} viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{
          pathLength: { duration, delay, ease: 'easeInOut' },
          opacity: { duration: 0.3, delay },
        }}
      />
    </svg>
  );
}
