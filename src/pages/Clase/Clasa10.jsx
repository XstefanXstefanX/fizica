import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";
import Capitol from "../../components/Capitol";
import DisplayPresentations from "../../components/DisplayPresentations";
import AddCanvaPresentations from "../../components/AddCanvaPresentations";

const Clasa10 = () => {
  return (
    <>
      <Banner image={BannerImg} title={"Clasa X"} />
      <div className="class-container">
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
      </div>
    </>
  );
};

export default Clasa10;
