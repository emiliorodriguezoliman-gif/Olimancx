// app/components/layout/CentralContainer.jsx
export default function CentralContainer({ children, className = "" }) {
  return (
    <div className={`max-w-6xl mx-auto px-5 ${className}`}>
      {children}
    </div>
  );
}
