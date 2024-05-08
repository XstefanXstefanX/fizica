import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";
import Capitol from "../../components/Capitol";

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
    </div>
  );
};

export default Clasa12;
