export function HeroArt() {
  return (
    <svg
      className="hero-art"
      viewBox="0 0 480 400"
      xmlns="http://www.w3.org/2000/svg"
      fontFamily="Inter,-apple-system,Segoe UI,Roboto,sans-serif"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#0e2f2b" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0e2f2b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a0e14" />
          <stop offset="100%" stopColor="#0e1622" />
        </linearGradient>
      </defs>
      <circle cx="240" cy="200" r="185" fill="url(#glow)" />

      <circle className="particle" cx="58" cy="60" r="4" fill="#22e6cb" />
      <circle
        className="particle"
        cx="426"
        cy="210"
        r="5"
        fill="#3a49c4"
        style={{ animationDelay: ".6s" }}
      />
      <circle
        className="particle"
        cx="444"
        cy="70"
        r="3"
        fill="#22e6cb"
        style={{ animationDelay: "1.1s" }}
      />
      <circle
        className="particle"
        cx="34"
        cy="250"
        r="3.5"
        fill="#3a49c4"
        style={{ animationDelay: "1.6s" }}
      />

      {/* desk */}
      <rect x="24" y="320" width="432" height="9" rx="3" fill="#3a49c4" opacity="0.4" />
      <rect x="24" y="329" width="432" height="9" fill="#131a24" />

      {/* plant */}
      <rect x="392" y="292" width="30" height="28" rx="4" fill="#1a2472" />
      <path
        d="M407,292 C395,278 395,262 407,252 C419,262 419,278 407,292 Z"
        fill="#0e2f2b"
        stroke="#22e6cb"
        strokeWidth="1.5"
      />
      <path
        d="M407,292 C400,282 400,270 407,262 C414,270 414,282 407,292 Z"
        fill="#22e6cb"
        opacity="0.5"
      />

      {/* mug */}
      <rect x="330" y="298" width="26" height="22" rx="4" fill="#131a24" stroke="#232e3d" strokeWidth="1.5" />
      <path d="M356,302 a8,8 0 0 1 0,14" fill="none" stroke="#232e3d" strokeWidth="2" />

      {/* laptop */}
      <path d="M168,320 L312,320 L328,338 L152,338 Z" fill="#232e3d" />
      <rect x="180" y="200" width="120" height="120" rx="10" fill="#131a24" stroke="#3a49c4" strokeWidth="2" />
      <rect x="188" y="208" width="104" height="104" rx="5" fill="url(#screenGrad)" />
      <path
        className="spark"
        d="M240,222 l4.5,11 11,4.5 -11,4.5 -4.5,11 -4.5,-11 -11,-4.5 11,-4.5z"
        fill="#22e6cb"
      />
      <rect x="204" y="248" width="72" height="34" rx="11" fill="#0e2f2b" stroke="#22e6cb" strokeWidth="1.5" />
      <circle className="particle" cx="224" cy="265" r="3.2" fill="#22e6cb" />
      <circle
        className="particle"
        cx="240"
        cy="265"
        r="3.2"
        fill="#22e6cb"
        style={{ animationDelay: ".3s" }}
      />
      <circle
        className="particle"
        cx="256"
        cy="265"
        r="3.2"
        fill="#22e6cb"
        style={{ animationDelay: ".6s" }}
      />

      {/* floating card: hours saved */}
      <g className="float-a">
        <rect x="26" y="78" width="158" height="80" rx="14" fill="#131a24" stroke="#232e3d" />
        <text x="42" y="102" fill="#94a3b5" fontSize="11" fontWeight="600" letterSpacing="0.5">
          MANUAL HOURS / WK
        </text>
        <polyline
          points="42,142 70,126 90,134 116,106 136,114 166,92"
          fill="none"
          stroke="#22e6cb"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="42" y="126" fill="#eef2f7" fontSize="15" fontWeight="800">
          ↓ 18 hrs saved
        </text>
      </g>

      {/* floating card: dedicated */}
      <g className="float-b">
        <rect x="300" y="52" width="156" height="74" rx="14" fill="#131a24" stroke="#232e3d" />
        <circle cx="324" cy="80" r="13" fill="#0e2f2b" />
        <path
          d="M318,80 l4,4 9,-9"
          fill="none"
          stroke="#22e6cb"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="346" y="77" fill="#eef2f7" fontSize="13.5" fontWeight="800">
          100% yours
        </text>
        <text x="346" y="95" fill="#94a3b5" fontSize="11" fontWeight="600">
          full-time focus
        </text>
      </g>
    </svg>
  );
}
