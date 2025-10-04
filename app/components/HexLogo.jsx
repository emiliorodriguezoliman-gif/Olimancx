// app/components/HexLogo.jsx
export default function HexLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d="M50 5 90 28 90 72 50 95 10 72 10 28Z" fill="#1E56A0" />
      <circle cx="50" cy="50" r="18" fill="#6C757D" />
      <circle cx="50" cy="50" r="10" fill="#ffffff" />
    </svg>
  );
}