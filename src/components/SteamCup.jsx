// Signature element: animated steam rising from a stylized cup
export default function SteamCup({ size = 120, className = '' }) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 100 130"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Steam wisps */}
      <g>
        <path
          d="M35 45 Q32 38 35 30 Q38 22 35 15"
          stroke="#C8934A"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-steam1"
          style={{ transformOrigin: '35px 45px' }}
        />
        <path
          d="M50 48 Q47 40 50 31 Q53 22 50 14"
          stroke="#C8934A"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-steam2"
          style={{ transformOrigin: '50px 48px' }}
        />
        <path
          d="M65 45 Q62 37 65 29 Q68 21 65 13"
          stroke="#C8934A"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-steam3"
          style={{ transformOrigin: '65px 45px' }}
        />
      </g>

      {/* Cup body */}
      <path
        d="M20 52 L26 105 Q26 110 32 110 L68 110 Q74 110 74 105 L80 52 Z"
        fill="#3D2B1F"
      />
      {/* Coffee surface */}
      <ellipse cx="50" cy="52" rx="30" ry="7" fill="#C8934A" opacity="0.9" />
      {/* Foam highlight */}
      <ellipse cx="50" cy="52" rx="20" ry="4" fill="#F5EDD6" opacity="0.25" />

      {/* Handle */}
      <path
        d="M74 65 Q92 65 92 78 Q92 91 74 91"
        stroke="#3D2B1F"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Saucer */}
      <ellipse cx="50" cy="114" rx="38" ry="8" fill="#3D2B1F" opacity="0.8" />
      <ellipse cx="50" cy="112" rx="42" ry="5" fill="#3D2B1F" />
    </svg>
  )
}
