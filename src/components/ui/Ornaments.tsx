export function CompassRose({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="0.8" />
      <path d="M16 1 19 13 31 16 19 19 16 31 13 19 1 16 13 13Z" stroke="currentColor" strokeWidth="0.9" />
      <path d="m7 7 9 6 9-6-6 9 6 9-9-6-9 6 6-9Z" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}

export function CelestialBackdrop() {
  return (
    <svg className="celestial-watermark" viewBox="0 0 500 500" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.8">
        <circle cx="250" cy="250" r="228" />
        <circle cx="250" cy="250" r="215" />
        <circle cx="250" cy="250" r="175" />
        <circle cx="250" cy="250" r="100" />
        <ellipse cx="250" cy="250" rx="110" ry="215" transform="rotate(35 250 250)" />
        <path d="M250 22v456M22 250h456M89 89l322 322M89 411 411 89" />
        <path d="m250 75 152 262H98Z" />
        {Array.from({ length: 24 }, (_, i) => (
          <path key={i} d="M250 22v13" transform={`rotate(${i * 15} 250 250)`} />
        ))}
      </g>
      <path d="m250 223 6 21 21 6-21 6-6 21-6-21-21-6 21-6Z" fill="currentColor" />
    </svg>
  );
}
