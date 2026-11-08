import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="max-w-2xl min-h-132 mx-auto flex flex-col items-center justify-center px-4 py-8 bg-white text-black md:max-w-5xl">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 underline font-bold">
        Return to home
      </Link>
    </main>
  );
}
