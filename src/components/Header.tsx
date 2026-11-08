import { Link, NavLink } from "react-router-dom";
import { getPublicAssetUrl } from "@/utils/assets";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white text-black md:max-w-5xl md:w-full md:mx-auto ">
      <Link to="/" className="flex items-center space-x-2" aria-label="Home">
        <img
          src={getPublicAssetUrl("logo-icon.webp")}
          alt=""
          className="w-8 h-8"
          width={32}
          height={32}
          decoding="async"
        />
        <span className="font-bold text-lg">My Learning Journal</span>
      </Link>
      <nav
        className="space-x-4 uppercase font-medium text-sm"
        aria-label="Primary navigation"
      >
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
