import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";
import Capitol from "../../components/Capitol";

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
    </div>
  );
};

export default Clasa10;
