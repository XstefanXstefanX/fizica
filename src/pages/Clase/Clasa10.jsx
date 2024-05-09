import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";
import Capitol from "../../components/Capitol";
import DisplayPresentations from "../../components/DisplayPresentations";
import AddCanvaPresentations from "../../components/AddCanvaPresentations";

const Clasa10 = () => {
  return (
    <div>
      <Banner image={BannerImg} title={"Clasa X"} />
      <h1 className="teme-produs">
        <span>Teme</span> de Produs
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
      <AddCanvaPresentations class="clasa-10" />
      <DisplayPresentations class="clasa-10" />
    </div>
  );
};

export default Clasa10;
