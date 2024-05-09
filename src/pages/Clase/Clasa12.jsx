import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";
import Capitol from "../../components/Capitol";
import DisplayPresentations from "../../components/DisplayPresentations";
import AddCanvaPresentations from "../../components/AddCanvaPresentations";

const Clasa12 = () => {
  return (
    <div>
      <Banner image={BannerImg} title={"Clasa XII"} />
      <h1 className="teme-produs">
        <span>Teme</span> de Produs
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
      <AddCanvaPresentations class="clasa-12" />
      <DisplayPresentations class="clasa-12" />
    </div>
  );
};

export default Clasa12;
