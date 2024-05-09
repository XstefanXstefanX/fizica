import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";
import Capitol from "../../components/Capitol";
import DisplayPresentations from "../../components/DisplayPresentations";
import AddCanvaPresentations from "../../components/AddCanvaPresentations";

const Clasa11 = () => {
  return (
    <div>
      <Banner image={BannerImg} title={"Clasa XI"} />
      <h1 className="teme-produs">
        <span>Teme</span> de Produs
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
      <AddCanvaPresentations class="clasa-11" />
      <DisplayPresentations class="clasa-11" />
    </div>
  );
};

export default Clasa11;
