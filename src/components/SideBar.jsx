import React from "react";
import "../styles/sidebar.css";
import { Outlet, Link } from "react-router-dom";
import { LINKS_SUPORT_DIDACTIC } from "../data";
import { LINKS_SUPORT_CLASE } from "../data";
import { LINKS_EXERCISE } from "../data";
import DropDownSvg from "../images/dropdown.svg";

const SideBar = (props) => {
  const [drop, setDrop] = React.useState(false);
  const [dropClase, setDropClase] = React.useState(false);
  const [dropExerseaza, setDropExerseaza] = React.useState(false);
  const handleDropExerseaza = () => {
    setDropExerseaza(!dropExerseaza);
  };
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
          <Link to="/">Pagina de pornire</Link>
        </li>
        <li className="side-nav-link">
          <span onClick={handleDrop}>
            <img src={DropDownSvg} className="dropdown-svg"></img> Suport
            Didactic
          </span>
          <ul className={`side-bar-drop ${drop ? "drop" : ""}`}>
            {LINKS_SUPORT_DIDACTIC.map((link) => (
              <li key={link.name}>
                <Link to={link.to}>{link.name}</Link>
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
                <Link to={link.to}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="side-nav-link">
          <span onClick={handleDropExerseaza}>
            <img src={DropDownSvg} className="dropdown-svg"></img> Exersează
          </span>
          <ul className={`side-bar-drop ${dropExerseaza ? "drop" : ""}`}>
            {LINKS_EXERCISE.map((link) => (
              <li key={link.name}>
                <Link to={link.to}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="side-nav-link">
          <Link to="/noutati">Noutăți</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default SideBar;
