import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";
import Capitol from "../../components/Capitol";
import DisplayPresentations from "../../components/DisplayPresentations";
import AddCanvaPresentations from "../../components/AddCanvaPresentations";
import Footer from "../../components/Footer";
import DisplayPDF from "../../components/DisplayPDF";

const Clasa10 = () => {
  return (
    <>
    <>
      <Banner image={BannerImg} title={"Clasa X"} />
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
            <Capitol titlu="Algebră" clasa="clasa10" />
          </section>
          <section className="capitol">
            <Capitol titlu="Geometria" clasa="clasa10" />
          </section>
          <section className="capitol">
            <Capitol titlu="Elemente de trigonometrie" clasa="clasa10" />
          </section>
        </div>
        <div id="add-canva-presentation">
          <AddCanvaPresentations class="clasa-10" />
        </div>
        <DisplayPresentations class="clasa-10" />
        <DisplayPDF clasa="clasa10" />
      </div>
      <Footer />
    </>
  );
};

export default Clasa10;
