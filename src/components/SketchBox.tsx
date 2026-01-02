'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface SketchBoxProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function SketchBox({ children, className = '', animate = true }: SketchBoxProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const rect = svg.parentElement?.getBoundingClientRect();
    if (!rect) return;

    const w = rect.width;
    const h = rect.height;

    // Genera un path "disegnato a mano" con piccole imperfezioni
    const roughness = 2;
    const getOffset = () => (Math.random() - 0.5) * roughness;

    const path = `
      M ${2 + getOffset()} ${2 + getOffset()}
      L ${w - 2 + getOffset()} ${2 + getOffset()}
      L ${w - 2 + getOffset()} ${h - 2 + getOffset()}
      L ${2 + getOffset()} ${h - 2 + getOffset()}
      Z
    `;

    const pathElement = svg.querySelector('path');
    if (pathElement) {
      pathElement.setAttribute('d', path);

      if (animate) {
        const length = pathElement.getTotalLength();
        pathElement.style.strokeDasharray = `${length}`;
        pathElement.style.strokeDashoffset = `${length}`;
        pathElement.style.animation = 'sketch-draw 1s ease-out forwards';
      }
    }
  }, [animate]);

  return (
    <div className={`sketch-box relative ${className}`}>
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-neutral-800"
        />
      </svg>
      {children}
    </div>
  );
}
