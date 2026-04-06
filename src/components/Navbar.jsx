import { NavLink } from "react-router-dom";

const base =
  "px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-all duration-300 whitespace-nowrap";

const navLinkStyles = ({ isActive }) => {
  return isActive
    ? `${base} text-indigo-600 bg-indigo-50 shadow-sm`
    : `${base} text-slate-600 hover:bg-slate-100`;
};

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-center items-center gap-1 sm:gap-4 border-slate-100 bg-white/80 backdrop-blur-md px-2 sm:px-4 py-3">
      <NavLink className={navLinkStyles} to="/" title="Página inicial">
        Home
      </NavLink>
      <NavLink className={navLinkStyles} to="/historico" title="Histórico">
        Histórico
      </NavLink>
      <NavLink className={navLinkStyles} to="/about" title="Sobre o projeto">
        Sobre
      </NavLink>
    </nav>
  );
}
