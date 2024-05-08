import React from "react";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import { LINKS_SUPORT_DIDACTIC } from "../data";
import { LINKS_SUPORT_CLASE } from "../data";
import DropDownSvg from "../images/dropdown.svg";

const SideBar = (props) => {
  const path = props.path;
  const [drop, setDrop] = React.useState(false);
  const [dropClase, setDropClase] = React.useState(false);
  const handleDropClase = () => {
    setDropClase(!dropClase);
  };
  const handleDrop = () => {
    setDrop(!drop);
  };
  return (
    <div
      className={`side-bar-container ${props.isOpen ? "open-side-bar" : ""}`}
    >
      <ul className="side-bar">
        <li className="side-nav-link">
          <Link to="/" className={path === "/" ? "side-bar-active" : ""}>
            Pagina de pornire
          </Link>
        </li>
        <li className="side-nav-link">
          <span onClick={handleDrop}>
            <img src={DropDownSvg} className="dropdown-svg"></img> Suport
            Didactic
          </span>
          <ul className={`side-bar-drop ${drop ? "drop" : ""}`}>
            {LINKS_SUPORT_DIDACTIC.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className={path === `${link.to}` ? "side-bar-active" : ""}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="side-nav-link">
          <span onClick={handleDropClase}>
            <img src={DropDownSvg} className="dropdown-svg"></img> Clase
          </span>
          <ul className={`side-bar-drop ${dropClase ? "drop" : ""}`}>
            {LINKS_SUPORT_CLASE.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className={path === `${link.to}` ? "side-bar-active" : ""}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="side-nav-link">
          <Link
            to="/noutati"
            className={path === "/noutati" ? "side-bar-active" : ""}
          >
            Noutăți
          </Link>
        </li>
        <li className="side-nav-link">
          <Link
            to="/logout"
            className={path === "/logout" ? "side-bar-active" : ""}
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
