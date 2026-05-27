import React from 'react';

export default function MicrosoftTabMeetingGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fca5a5" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Background with abstract gradient */}
      <rect width="300" height="169" fill="#f3f4f6" />
      <rect width="300" height="169" fill="url(#spiralGradient)" opacity="0.3" />

      {/* Simplified, abstract spiral element */}
      <path
        d="M150 84.5 C 100 30, 200 30, 150 84.5 Z M150 84.5 C 200 139, 100 139, 150 84.5 Z"
        fill="url(#spiralGradient)"
        opacity="0.6"
        stroke="#fff"
        strokeWidth="0.5"
      />
      <circle cx="150" cy="84.5" r="10" fill="white" opacity="0.5" />

      {/* Microsoft Logo Placeholder (top-right) */}
      <rect x="250" y="10" width="8" height="8" fill="#f25022" />
      <rect x="260" y="10" width="8" height="8" fill="#7fba00" />
      <rect x="250" y="20" width="8" height="8" fill="#00a4ef" />
      <rect x="260" y="20" width="8" height="8" fill="#ffb900" />
      <text x="272" y="22" fontFamily="Arial, sans-serif" fontSize="8" fill="#5f6368">Microsoft</text>

      {/* Text Elements (bottom-right) */}
      <text
        x="290"
        y="145"
        fontFamily="Arial, sans-serif"
        fontSize="9"
        fill="#374151"
        textAnchor="end"
      >
        Microsoft Research Asia
      </text>
      <text
        x="290"
        y="158"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill="#111827"
        textAnchor="end"
      >
        TAB Meeting 2026
      </text>
    </svg>
  );
}
