'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function PencilCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], input, textarea, select, [onclick]');
      setIsHovering(!!isClickable);
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

  // Colori matita
  const pencilBody = isHovering ? '#4ade80' : '#f4d03f'; // Verde quando su link
  const pencilStripe = isHovering ? '#22c55e' : '#e74c3c';
  const pencilMetal = isHovering ? '#86efac' : '#c0c0c0';

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
          width="60"
          height="60"
          viewBox="0 0 60 60"
          style={{ transform: 'translate(-5px, -55px)' }}
          animate={{
            rotate: isDrawing ? [45, 42, 48, 42, 45] : 45,
            scale: isDrawing ? 1.1 : isHovering ? 1.15 : 1,
          }}
          transition={{
            rotate: { duration: 0.2, repeat: isDrawing ? Infinity : 0 },
            scale: { duration: 0.15 },
          }}
        >
          {/* Matita ruotata 45° - punta in basso a destra */}
          <g transform="translate(5, 55)">
            {/* Corpo matita */}
            <motion.rect
              x="-3" y="-48" width="6" height="32"
              fill={pencilBody}
              stroke="#2a2a2a"
              strokeWidth="1"
              animate={{ fill: pencilBody }}
              transition={{ duration: 0.2 }}
            />
            {/* Striscia colorata */}
            <motion.rect
              x="-3" y="-48" width="6" height="5"
              fill={pencilStripe}
              animate={{ fill: pencilStripe }}
              transition={{ duration: 0.2 }}
            />
            {/* Punta legno */}
            <polygon points="-3,-16 3,-16 0,0" fill="#f5d6ba" stroke="#2a2a2a" strokeWidth="1" />
            {/* Mina (punta) - questo è il punto di click */}
            <polygon points="-1,-5 1,-5 0,0" fill="#2a2a2a" />
            {/* Gomma */}
            <rect x="-3" y="-53" width="6" height="5" fill="#ffb6c1" rx="1" />
            {/* Fascetta metallica */}
            <motion.rect
              x="-4" y="-48" width="8" height="3"
              fill={pencilMetal}
              animate={{ fill: pencilMetal }}
              transition={{ duration: 0.2 }}
            />
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
