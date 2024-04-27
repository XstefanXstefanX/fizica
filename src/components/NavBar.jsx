import React from "react";
import "../styles/navbar.css";
import SearchImg from "../images/search.svg";
import BlackSearchImg from "../images/blacksearch.svg";
import { Outlet, Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import DropDownSVg from "../images/dropdown.svg";
import MenuImg from "../images/menu.svg";
import { LINKS_SUPORT_DIDACTIC } from "../data";
import { LINKS_SUPORT_CLASE } from "../data";
import SideBar from "./SideBar";
import { LINKS_EXERCISE } from "../data";

const NavBar = (props) => {
  const [openClase, setOpenClase] = React.useState(false);
  const [openSuport, setOpenSuport] = React.useState(false);
  const [openExercise, setOpenExercise] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [inputText, setInputText] = React.useState("");
  const [isOpenSideBar, setIsOpenSideBar] = React.useState(false);
  const handleOpenExercise = () => {
    setOpenExercise(!openExercise);
  };
  const handleOpenSideBar = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };
  const handleOpenClase = () => {
    setOpenClase(!openClase);
  };
  const handleOpenSuport = () => {
    setOpenSuport(!openSuport);
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
        <label className="hamburger-menu" onChange={handleOpenSideBar}>
          <input type="checkbox" className="menu-button"></input>
        </label>

        <SideBar isOpen={isOpenSideBar} path={props.path} />
        <span className="title nav-link">
          <Link to="/" className="logo-container">
            <img className="logo" src={Logo} alt="logo-image" />
            FIZICA - lumea mea
          </Link>
        </span>
        <ul className="nav-bar">
          <li className="nav-link">
            <Link to="/" className={props.path === "/" ? "active link" : ""}>
              Pagina de pornire
            </Link>
          </li>
          <li
            onMouseEnter={handleOpenSuport}
            onMouseLeave={handleOpenSuport}
            className="nav-link drop-down-activator"
          >
            <span>
              SuportDidactic{" "}
              <img
                className="dropdown-svg"
                src={DropDownSVg}
                alt="dropdown-svg"
              />
            </span>
            {openSuport ? (
              <div className="nav-bar-dropdown">
                <ul>
                  {LINKS_SUPORT_DIDACTIC.map((link) => (
                    <li className="nav-link-drop" key={link.name}>
                      <Link
                        className={props.path === `${link.to}` ? "active" : ""}
                        to={link.to}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div></div>
            )}
          </li>
          <li
            onMouseEnter={handleOpenClase}
            onMouseLeave={handleOpenClase}
            className="nav-link drop-down-activator"
          >
            <span>
              Clase{" "}
              <img
                className="dropdown-svg"
                src={DropDownSVg}
                alt="dropdown-svg"
              />{" "}
            </span>
            {openClase ? (
              <div className="nav-bar-dropdown">
                <ul>
                  {LINKS_SUPORT_CLASE.map((link) => (
                    <li className="nav-link-drop" key={link.name}>
                      <Link
                        className={props.path === `${link.to}` ? "active" : ""}
                        to={link.to}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div></div>
            )}
          </li>
          <li
            onMouseEnter={handleOpenExercise}
            onMouseLeave={handleOpenExercise}
            className="nav-link drop-down-activator"
          >
            <span>Exersează </span>
            {openExercise ? (
              <div className="nav-bar-dropdown">
                <ul>
                  {LINKS_EXERCISE.map((link) => (
                    <li className="nav-link-drop" key={link.name}>
                      <Link
                        className={props.path === `${link.to}` ? "active" : ""}
                        to={link.to}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div></div>
            )}
          </li>
          <li className="nav-link">
            <Link
              className={props.path === "/noutati" ? "active" : ""}
              to="/noutati"
            >
              Noutăți
            </Link>
          </li>
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
      <div className="fake-nav"></div>
      <Outlet />
    </>
  );
};

export default NavBar;
