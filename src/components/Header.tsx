import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white text-black md:max-w-5xl md:mx-auto">
      <Link to="/">
        <div className="flex items-center space-x-2">
          <img src="/logo-icon.png" alt="Logo" className="w-8 h-8" />
          <p className="font-bold text-lg">My Learning Journal</p>
        </div>
      </Link>
      <nav className="space-x-4 uppercase font-medium text-sm">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "underline font-black" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "underline font-black" : "")}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}
