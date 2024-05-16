import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";
import Capitol from "../../components/Capitol";
import DisplayPresentations from "../../components/DisplayPresentations";
import AddCanvaPresentations from "../../components/AddCanvaPresentations";

const Clasa11 = () => {
  return (
    <>
      <Banner image={BannerImg} title={"Clasa XI"} />
      <div className="class-container">
        <div className="class-capitole" id="capitole">
          <h1 className="important-title">
            <span>Încarcă</span> Temele de Produs
          </h1>
          <section className="capitol">
            <Capitol titlu="Algebră" clasa="clasa11" />
          </section>
          <section className="capitol">
            <Capitol titlu="Geometrie" clasa="clasa11" />
          </section>
          <section className="capitol">
            <Capitol titlu="Analiză matematică" clasa="clasa11" />
          </section>
        </div>
        <div id="add-canva-presentation">
          <AddCanvaPresentations class="clasa-11" />
        </div>
        <DisplayPresentations class="clasa-11" />
      </div>
    </>
  );
};

export default Clasa11;
