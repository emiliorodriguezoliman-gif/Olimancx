// app/not-found.jsx
import Link from "next/link";

export default function NotFound(){
  return (
    <main className="container-pro py-20 text-center">
      <h1 className="text-5xl font-extrabold">404</h1>
      <p className="mt-3 text-gray-600">Esta página no existe.</p>
      <Link href="/" className="mt-6 inline-flex btn-primary">Volver al inicio</Link>
    </main>
  );
}
