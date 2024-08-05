'use client'
import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "../assets/NavBar.css"

const Navbar: React.FC = () => {
  const [isAffix, setIsAffix] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsAffix(true);
      } else {
        setIsAffix(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav ${isAffix ? "affix" : ""}`}>
      <div className="container">
        <div className="logo">
          <a href="/">ruggd.in</a>
        </div>
        <div
          className={`main_list ${isMenuOpen ? "show_list" : ""}`}
          id="mainListDiv"
        >
          <ul className="navlinks">
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/categories">Categories</a>
            </li>
            <li>
              <a href="/deals">Deals</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* <div className="nav-actions">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>
              <FaSearch />
            </button>
          </div>
          <div className="user-actions">
            <button className="cart-btn">
              <FaShoppingCart />
              <span className="cart-count">0</span>
            </button>
            <div className="user-dropdown">
              <button className="user-btn">
                <FaUser />
              </button>
              <div className="dropdown-content">
                <a href="/profile">Profile</a>
                <a href="/orders">Orders</a>
                <a href="/logout">Logout</a>
              </div>
            </div>
          </div>
        </div> */}
        <span
          className={`navTrigger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
