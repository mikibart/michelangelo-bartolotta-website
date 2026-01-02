'use client';

import Image from 'next/image';
import { useState } from 'react';

interface SketchImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sketchOnHover?: boolean;
}

export default function SketchImage({
  src,
  alt,
  fill,
  width,
  height,
  className = '',
  priority = false,
  sketchOnHover = true,
}: SketchImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  const imageProps = fill
    ? { fill: true }
    : { width: width || 800, height: height || 600 };

  return (
    <div
      className={`sketch-image-container relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Immagine originale (visibile all'hover se sketchOnHover) */}
      <Image
        src={src}
        alt={alt}
        {...imageProps}
        priority={priority}
        className={`object-cover transition-all duration-700 ${
          sketchOnHover && !isHovered ? 'sketch-filter' : ''
        }`}
      />

      {/* Bordo disegnato a mano */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <rect
          x="4"
          y="4"
          width="calc(100% - 8px)"
          height="calc(100% - 8px)"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="1"
          strokeDasharray="8 4"
          className="sketch-border"
          style={{
            width: 'calc(100% - 8px)',
            height: 'calc(100% - 8px)',
          }}
        />
      </svg>

      {/* Angoli decorativi "disegnati" */}
      <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-neutral-800 sketch-corner" />
      <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-neutral-800 sketch-corner" />
      <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-neutral-800 sketch-corner" />
      <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-neutral-800 sketch-corner" />
    </div>
  );
}
