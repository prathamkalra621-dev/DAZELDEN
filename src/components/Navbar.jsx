import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="DAZELDEN Logo" className="logo" />
          <span>DAZELDEN</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about-us"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <Link
            to="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Let's Talk
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;