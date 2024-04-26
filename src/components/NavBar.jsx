import React from "react";
import "../styles/navbar.css";
import SearchImg from "../images/search.svg";
import BlackSearchImg from "../images/blacksearch.svg";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [inputText, setInputText] = React.useState("");
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpenSearch = () => {
    setSearchOpen(!searchOpen);
  };
  const handleInput = (e) => {
    let lowercase = e.target.value.toLowerCase();
    setInputText(lowercase);
  };
  return (
    <>
      <nav className="nav-bar-container">
        <span className="title">
          <Link to="/home" className="logo-container">
            <img
              className="logo"
              src="./src/images/logo.svg"
              alt="logo-image"
            />
            Fizica - lumea mea
          </Link>
        </span>
        <ul className="nav-bar">
          <li className="nav-link">
            <Link to="/home">Pagina de pornire</Link>
          </li>
          <li className="nav-link">
            <Link to="/suportdidactic">Suport Didactic</Link>
          </li>
          <li
            onMouseEnter={handleOpen}
            onMouseLeave={handleOpen}
            className="nav-link drop-down-activator"
          >
            <span>Clase</span>
            {open ? (
              <div className="nav-bar-dropdown">
                <ul>
                  <li>
                    <Link to="/clasa8">Clasa VIII</Link>
                  </li>
                  <li>
                    <Link to="/clasa9">Clasa IX</Link>
                  </li>
                  <li>
                    <Link to="/clasa10">Clasa X</Link>
                  </li>
                  <li>
                    <Link to="/clasa11">Clasa XI</Link>
                  </li>
                  <li>
                    <Link to="/clasa12">Clasa XII</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div></div>
            )}
          </li>
          <li className="nav-link">Exersează</li>
          <li className="nav-link">Noțiuni</li>
        </ul>
        <div className="search-button" onClick={handleOpenSearch}>
          <img
            className="search-icon pointer"
            src={SearchImg}
            alt="search-img"
          />
        </div>
        {searchOpen ? (
          <div className="search-bar-container">
            <span onClick={handleOpenSearch} className="pointer">
              Go Back
            </span>
            <div className="search-bar">
              <img
                className="search-icon pointer"
                src={BlackSearchImg}
                alt="search-icon"
              />
              <input
                type="text"
                label="Search"
                placeholder="Search this site"
                onChange={handleInput}
              />
            </div>
            <div></div>
          </div>
        ) : (
          <div className="search-bar no-show"></div>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
