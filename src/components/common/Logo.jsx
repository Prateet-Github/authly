export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <defs>
          <linearGradient
            id="logo-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" style={{ stopColor: "#a78bfa" }} />
            <stop offset="100%" style={{ stopColor: "#6366f1" }} />
          </linearGradient>
        </defs>
        <path
          d="M50 10 L80 25 L80 50 C80 70 65 85 50 90 C35 85 20 70 20 50 L20 25 Z"
          stroke="url(#logo-gradient)"
          strokeWidth="4"
          fill="none"
        />
        <rect
          x="42"
          y="48"
          width="16"
          height="16"
          rx="2"
          fill="url(#logo-gradient)"
        />
        <path
          d="M45 48 L45 42 C45 38.5 47.5 36 50 36 C52.5 36 55 38.5 55 42 L55 48"
          stroke="url(#logo-gradient)"
          strokeWidth="3"
          fill="none"
        />
      </svg>
      <span className="text-xl font-bold">Authly</span>
    </div>
  );
}
