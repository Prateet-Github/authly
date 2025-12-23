export function Logo({ size = 32, className = "" }) {
  const gradientId = `authly-gradient-${size}`;

  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        className="shrink-0"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>

        {/* Shield outline */}
        <path
          d="M50 15 L75 27 L75 50 C75 67 63 80 50 85 C37 80 25 67 25 50 L25 27 Z"
          stroke={`url(#${gradientId})`}
          strokeWidth="7"
          fill="none"
        />

        {/* Lock body */}
        <rect
          x="40"
          y="50"
          width="20"
          height="20"
          rx="4"
          fill={`url(#${gradientId})`}
        />

        {/* Lock shackle */}
        <path
          d="M42 50 L42 42 C42 36.5 46 32.5 50 32.5 C54 32.5 58 36.5 58 42 L58 50"
          stroke={`url(#${gradientId})`}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Keyhole */}
        <circle cx="50" cy="57" r="2.5" fill="rgba(15,23,42,0.6)" />
        <rect
          x="48.5"
          y="57"
          width="3"
          height="8"
          rx="1.5"
          fill="rgba(15,23,42,0.6)"
        />
      </svg>
    </div>
  );
}
