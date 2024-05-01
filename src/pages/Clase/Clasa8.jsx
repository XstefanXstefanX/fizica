import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";
import Capitol from "../../components/Capitol";

const Clasa8 = () => {
  return (
    <div>
      <Banner image={BannerImg} title={"Clasa VIII"} />
      <h1 className="teme-produs">
        <span>Teme</span> de Produs
      </h1>
      <section className="capitol">
        <Capitol titlu="Fenomene Termince" clasa="clasa8" />
      </section>
      <section className="capitol">
        <Capitol titlu="Fenomene electrice" clasa="clasa8" />
      </section>
      <section className="capitol">
        <Capitol titlu="Unde" clasa="clasa8" />
      </section>
      <section className="capitol">
        <Capitol titlu="Fenomene electromagnetice" clasa="clasa8" />
      </section>
    </div>
  );
};

export default Clasa8;
