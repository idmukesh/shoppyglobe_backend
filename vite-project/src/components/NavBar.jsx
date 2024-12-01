// src/components/Nav.js
import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import CartIcon from "./CartIcon";
import "../Header.css";

// NavBar component that displays the navigation bar
function NavBar() {
  // State to control the visibility of the menu (for mobile responsiveness)
  const [toggle, setToggle] = useState(true);

  // Function to toggle the menu state (show or hide)
  function toggleMenu() {
    setToggle(!toggle);
  }

  return (
    <nav>
      {/* Logo section */}
      <div className="logo">
        <img src="/Logo.png" alt="Logo" height="60px" />
      </div>

      {/* Navigation menu, which toggles its visibility based on state */}
      <div className={`nav-menu ${toggle ? "show-toggle" : ""}`}>
        <ul>
          {/* Link to the Home page */}
          <Link to={'/'}>
            <li>Home</li>
          </Link>
          {/* Link to the About page */}
          <Link to={'/About'}>
            <li>About</li>
          </Link>
          {/* Link to the Contact page */}
          <Link to={'/Contact'}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      {/* Search bar component */}
      <Search />
      
      {/* Cart icon component */}
      <CartIcon />

      {/* Hamburger icon for mobile menu toggle */}
      <div className="hamburger-icon">
        <i className="fas fa-bars" onClick={toggleMenu}></i>
      </div>
    </nav>
  );
}

export default NavBar;
