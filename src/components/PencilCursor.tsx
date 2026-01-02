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
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="transform -translate-x-1 -translate-y-10"
          animate={{
            rotate: isDrawing ? [0, -5, 5, -5, 0] : 0,
            scale: isDrawing ? 1.1 : 1,
          }}
          transition={{
            rotate: { duration: 0.3, repeat: isDrawing ? Infinity : 0 },
            scale: { duration: 0.2 },
          }}
        >
          {/* Matita */}
          <g transform="rotate(45, 20, 20)">
            {/* Corpo matita */}
            <rect x="17" y="5" width="6" height="25" fill="#f4d03f" stroke="#2a2a2a" strokeWidth="1" />
            {/* Striscia */}
            <rect x="17" y="5" width="6" height="4" fill="#e74c3c" />
            {/* Punta */}
            <polygon points="17,30 23,30 20,38" fill="#f5d6ba" stroke="#2a2a2a" strokeWidth="1" />
            {/* Mina */}
            <polygon points="19,34 21,34 20,38" fill="#2a2a2a" />
            {/* Gomma */}
            <rect x="17" y="2" width="6" height="3" fill="#ffb6c1" rx="1" />
            {/* Fascetta */}
            <rect x="16" y="5" width="8" height="2" fill="#c0c0c0" />
          </g>
        </motion.svg>

        {/* Scia di disegno */}
        {isDrawing && (
          <motion.div
            className="absolute w-1 h-1 bg-[var(--pencil)] rounded-full"
            style={{ left: '20px', top: '38px' }}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 0.3, repeat: Infinity }}
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
