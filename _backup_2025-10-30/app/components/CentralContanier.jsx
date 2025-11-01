export default function CentralContainer({ children }) {
  return (
    <div className="max-w-container mx-auto px-5 py-10">
      {children}
    </div>
  );
}