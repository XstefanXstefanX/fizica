import React, { useState } from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";
import Capitol from "../../components/Capitol";
import DisplayPresentations from "../../components/DisplayPresentations";
import AddCanvaPresentations from "../../components/AddCanvaPresentations";
import "../../styles/class.css";
import DisplayPDF from "../../components/DisplayPDF";
import Footer from "../../components/Footer";

const Clasa9 = () => {
  return (
    <>
      <Banner image={BannerImg} title={"Clasa IX"} />
      <div className="class-container">
        <nav className="class-nav">
          <ul>
            <li>
              <a href="#prezentari-canva">Prezentări Canva</a>
            </li>
            <li>
              <a href="#prezentari-ppt">Prezentări Powerpoint</a>
            </li>
          </ul>
        </nav>
        <div className="class-capitole" id="capitole">
          <h1 className="important-title">
            <span>Încarcă</span> Temele de Produs
          </h1>
          <section className="capitol">
            <Capitol titlu="Algebră" clasa="clasa9" />
          </section>
          <section className="capitol">
            <Capitol titlu="Geometria" clasa="clasa9" />
          </section>
        </div>
        <div id="add-canva-presentation">
          <AddCanvaPresentations class="clasa-9" />
        </div>
        <DisplayPresentations class="clasa-9" />
        <DisplayPDF clasa="clasa9" />
      </div>
      <Footer />
    </>
  );
};

export default Clasa9;
