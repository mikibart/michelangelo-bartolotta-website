'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function PencilCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsDrawing(true);
    const handleMouseUp = () => setIsDrawing(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Cursore matita */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          style={{ transform: 'translate(-2px, -46px)' }}
          animate={{
            rotate: isDrawing ? [0, -3, 3, -3, 0] : 0,
            scale: isDrawing ? 1.05 : 1,
          }}
          transition={{
            rotate: { duration: 0.2, repeat: isDrawing ? Infinity : 0 },
            scale: { duration: 0.15 },
          }}
        >
          {/* Matita - punta in basso allineata al cursore */}
          <g transform="translate(24, 24)">
            {/* Corpo matita */}
            <rect x="-3" y="-40" width="6" height="28" fill="#f4d03f" stroke="#2a2a2a" strokeWidth="1" />
            {/* Striscia rossa */}
            <rect x="-3" y="-40" width="6" height="4" fill="#e74c3c" />
            {/* Punta legno */}
            <polygon points="-3,-12 3,-12 0,0" fill="#f5d6ba" stroke="#2a2a2a" strokeWidth="1" />
            {/* Mina (punta) - questo è il punto di click */}
            <polygon points="-1,-4 1,-4 0,0" fill="#2a2a2a" />
            {/* Gomma */}
            <rect x="-3" y="-44" width="6" height="4" fill="#ffb6c1" rx="1" />
            {/* Fascetta metallica */}
            <rect x="-4" y="-40" width="8" height="2" fill="#c0c0c0" />
          </g>
        </motion.svg>

        {/* Scia di disegno - sulla punta */}
        {isDrawing && (
          <motion.div
            className="absolute w-1 h-1 bg-[var(--pencil)] rounded-full"
            style={{ left: '-1px', top: '-1px' }}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 0] }}
            transition={{ duration: 0.2, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Nascondi cursore default */}
      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
