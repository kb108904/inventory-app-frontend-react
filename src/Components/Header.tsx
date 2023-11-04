import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logoImgSrc from "../assets/inventory_64_64_icon.png";
import ButtonContainer from "./auth/ButtonContainer";
import useFirebaseAuthentication from '../Hooks/FirebaseAuthentication'

function Header() {

  const [loginData, setLoginStatus] = useState({
    isLoggedIn: false,
    userUID: "",
  })

  useFirebaseAuthentication(setLoginStatus);

  return (
    <header className="header">
      <img className="header-logo" src={logoImgSrc} alt="header logo image" />
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="button-container">
        <ButtonContainer loggedIn={loginData.isLoggedIn} />
      </div>
    </header>
  );
}

export default Header;
