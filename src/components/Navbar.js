import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaPlay, FaBars, FaX } from "react-icons/fa6";

const NavItem = ({ children, to = "/", ...props }) => {
  return (
    <li className="nav-item" {...props}>
      <NavLink to={to} className="nav-link">
        {children}
      </NavLink>
    </li>
  );
};

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            T <sub>u</sub>p <sup>e</sup>x
          </Link>
        </div>

        <ul className="nav-lists">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/photos">photos</NavItem>
          <NavItem to="/contact">contact</NavItem>
        </ul>

        <a
          href="https://youtu.be/gKKvhA2-j6Y?si=VptXxDFiIOrYdyEs"
          target="_blank"
          className="btn nav-btn"
        >
          Watch <FaPlay style={{ fontSize: "20px" }} />
        </a>
      </nav>

      <nav className="nav-mobile">
        <div className="logo-mobile">
          <Link to="/">
            T <sub>u</sub>p <sup>e</sup>x
          </Link>
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setShowNav(!showNav)}
        >
          {showNav ? <FaX /> : <FaBars />}
        </button>
      </nav>

      <div
        className={`nav-mobile-navigations ${
          showNav ? "nav-mobile_popin" : "nav-mobile_popout"
        }`}
      >
        <ul className="nav-lists-mobile">
          <NavItem to="/" onClick={() => setShowNav(!showNav)}>
            Home
          </NavItem>
          <NavItem to="/photos" onClick={() => setShowNav(!showNav)}>
            photos
          </NavItem>
          <NavItem to="/contact" onClick={() => setShowNav(!showNav)}>
            contact
          </NavItem>
        </ul>

        <a
          href="https://youtu.be/gKKvhA2-j6Y?si=VptXxDFiIOrYdyEs"
          target="_blank"
          className="btn nav-btn"
        >
          Watch <FaPlay style={{ fontSize: "20px" }} />
        </a>
      </div>
    </>
  );
};

export default Navbar;
