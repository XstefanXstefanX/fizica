import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";
import Capitol from "../../components/Capitol";
import DisplayPresentations from "../../components/DisplayPresentations";
import AddCanvaPresentations from "../../components/AddCanvaPresentations";
import Footer from "../../components/Footer";
import DisplayPDF from "../../components/DisplayPDF";

const Clasa12 = () => {
  return (
    <>
      <Banner image={BannerImg} title={"Clasa XII"} />
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
            <Capitol
              titlu="
        Algebră"
              clasa="clasa12"
            />
          </section>
          <section className="capitol">
            <Capitol titlu="Geometrie" clasa="clasa12" />
          </section>
          <section className="capitol">
            <Capitol titlu="Analiză matematică" clasa="clasa12" />
          </section>
          <section className="capitol">
            <Capitol titlu="Elemente de combinatorică" clasa="clasa12" />
          </section>
          <section className="capitol">
            <Capitol
              titlu="Elemente de statistică matematică și calcul financiar"
              clasa="clasa12"
            />
          </section>
        </div>
        <div id="add-canva-presentation">
          <AddCanvaPresentations class="clasa-12" />
        </div>
        <DisplayPresentations class="clasa-12" />
        <DisplayPDF clasa="clasa12" />
      </div>
      <Footer />
    </>
  );
};

export default Clasa12;
