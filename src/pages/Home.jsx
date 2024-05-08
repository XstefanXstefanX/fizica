import React from "react";
import "../styles/home.css";
import BannerImg from "../images/welcome-banner.jpg";
import Banner from "../components/Banner";
import Clasa9 from "../images/clasa9.jpg";
import Clasa10 from "../images/clasa10.jpg";
import Clasa11 from "../images/clasa11.jpg";
import Clasa12 from "../images/clasa12.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner image={BannerImg} title={"MATEMATICA"} />
      <div className="home">
        <div className="lista-clase">
          <div className="clasa">
            <img src={Clasa9} alt="clasa9-img" />
            <h1>Clasa 9</h1>
            <Link className="lista-clase-link" to="/clasa9">
              Continuare...
            </Link>
          </div>
          <div className="clasa">
            <img src={Clasa10} alt="clasa10-img" />
            <h1>Clasa 10</h1>
            <Link className="lista-clase-link" to="/clasa10">
              Continuare...
            </Link>
          </div>
          <div className="clasa">
            <img src={Clasa11} alt="clasa11-img" />
            <h1>Clasa 11</h1>
            <Link className="lista-clase-link" to="/clasa11">
              Continuare...
            </Link>
          </div>
          <div className="clasa">
            <img src={Clasa12} alt="clasa12-img" />
            <h1>Clasa 12</h1>
            <Link className="lista-clase-link" to="/clasa12">
              Continuare...
            </Link>
          </div>
        </div>
        <div className="citate-container">
          <img src={BannerImg} alt="citat-imagine" />
          <div className="citate">
            <h3>
              <hr />
              <br />
              „Un matematician face matematică fiindcă vede în matematică ceva
              frumos, ceva interesant, ceva care îi place, ceva care îi e drag,
              ceva care îl tulbură, îl face să gândească, să mediteze, să
              viseze.”
              <br />
              <br />
              <hr />
            </h3>
            <p>
              Matematica este o limbă şi o ştiinţă.
              <span>- Lucian Blaga</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
