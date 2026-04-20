type Props = { className?: string; width?: number };

export function Ornament({ className = "", width = 120 }: Props) {
  return (
    <svg
      viewBox="0 0 200 24"
      width={width}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="12" x2="78" y2="12" stroke="currentColor" strokeWidth="0.75" />
      <line x1="122" y1="12" x2="200" y2="12" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="100" cy="12" r="2.2" fill="currentColor" />
      <circle cx="85" cy="12" r="1.2" fill="currentColor" />
      <circle cx="115" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function Monogram({ size = 56 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
      <text
        x="60"
        y="72"
        textAnchor="middle"
        fontFamily="Fraunces, serif"
        fontStyle="italic"
        fontSize="42"
        fontWeight="300"
        fill="currentColor"
      >
        P&amp;W
      </text>
    </svg>
  );
}

export function Floral({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 8 C 36 22, 28 28, 16 30 C 28 34, 34 42, 36 56 C 40 42, 48 38, 60 36 C 48 32, 42 24, 40 8 Z"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
      />
      <path
        d="M40 26 C 38 34, 32 38, 24 40 C 32 42, 36 48, 38 58 C 42 48, 48 44, 56 42 C 48 40, 42 34, 40 26 Z"
        fill="currentColor"
        opacity="0.15"
      />
      <circle cx="40" cy="42" r="1.5" fill="currentColor" />
    </svg>
  );
}
