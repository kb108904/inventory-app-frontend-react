import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img
        className="header-logo"
        src="../src/assets/pp.png"
        alt="header logo image"
      />
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="button-container">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
        <Link to="/register">
          <button className="register-button">Register</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
