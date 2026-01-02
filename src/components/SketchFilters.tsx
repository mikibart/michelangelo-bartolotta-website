export default function SketchFilters() {
  return (
    <svg className="absolute w-0 h-0" aria-hidden="true">
      <defs>
        {/* Filtro effetto matita per le immagini */}
        <filter id="pencil-sketch" x="-10%" y="-10%" width="120%" height="120%">
          {/* Converti in scala di grigi */}
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0    0    0    1 0"
          />
          {/* Aumenta contrasto */}
          <feComponentTransfer>
            <feFuncR type="linear" slope="1.5" intercept="-0.2" />
            <feFuncG type="linear" slope="1.5" intercept="-0.2" />
            <feFuncB type="linear" slope="1.5" intercept="-0.2" />
          </feComponentTransfer>
          {/* Effetto bordi a matita */}
          <feConvolveMatrix
            order="3"
            kernelMatrix="-1 -1 -1 -1 9 -1 -1 -1 -1"
            preserveAlpha="true"
          />
          {/* Leggera texture granulosa */}
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>

        {/* Filtro sketch più leggero per hover */}
        <filter id="pencil-light" x="-5%" y="-5%" width="110%" height="110%">
          <feColorMatrix
            type="matrix"
            values="0.4 0.4 0.2 0 0
                    0.4 0.4 0.2 0 0
                    0.4 0.4 0.2 0 0
                    0   0   0   1 0"
          />
          <feComponentTransfer>
            <feFuncR type="linear" slope="1.2" intercept="0" />
            <feFuncG type="linear" slope="1.2" intercept="0" />
            <feFuncB type="linear" slope="1.2" intercept="0" />
          </feComponentTransfer>
        </filter>

        {/* Pattern linee diagonali come tratteggio */}
        <pattern id="hatch" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="4" stroke="#1a1a1a" strokeWidth="0.5" opacity="0.3" />
        </pattern>

        {/* Pattern punti per ombreggiatura */}
        <pattern id="dots" patternUnits="userSpaceOnUse" width="3" height="3">
          <circle cx="1.5" cy="1.5" r="0.5" fill="#1a1a1a" opacity="0.2" />
        </pattern>

        {/* Filtro per testo effetto matita */}
        <filter id="pencil-text">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.5" />
        </filter>
      </defs>
    </svg>
  );
}
