import React from "react";
import "../styles/navbar.css";
import SearchImg from "../images/search.png";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="nav-bar-container">
        <span className="logo">
          <img src="./src/images/logo.svg" alt="logo-image" />
          Fizica - lumea mea
        </span>
        <ul className="nav-bar">
          <li className="nav-link">
            <Link to="/home">Pagina de pornire</Link>
          </li>
          <li className="nav-link">
            <Link to="/suportdidactic">Suport Didactic</Link>
          </li>
        </ul>
        <img className="search" src={SearchImg} alt="search-img" />
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
