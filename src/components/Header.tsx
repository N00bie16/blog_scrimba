import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white text-black">
      <div className="flex items-center space-x-2">
        <img src="/logo-icon.png" alt="Logo" width={40} height={40} />
        <p>My Learning Journal</p>
      </div>
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
