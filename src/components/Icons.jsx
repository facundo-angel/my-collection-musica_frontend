function Icon({ children, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function HomeIcon() {
  return <Icon><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></Icon>;
}

export function SearchIcon() {
  return <Icon><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Icon>;
}

export function LibraryIcon() {
  return <Icon><path d="M5 4v16M10 4v16M14.5 4.5l4.5 15" /></Icon>;
}

export function PlaylistIcon() {
  return <Icon><path d="M3 6h12M3 12h12M3 18h7" /><circle cx="17" cy="17" r="3" /><path d="M20 17V5" /></Icon>;
}

export function StatsIcon() {
  return <Icon><path d="M5 20V11M11 20V4M17 20v-6M3 20h18" /></Icon>;
}

export function UserIcon() {
  return <Icon><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></Icon>;
}

export function LogoIcon({ size = 28 }) {
  return <Icon size={size}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></Icon>;
}

export function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}