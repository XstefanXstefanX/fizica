import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";

const Clasa11 = () => {
  return (
    <div>
      <Banner image={BannerImg} title={"Clasa XI"} />
      <section className="capitol">Teoria cinetico-moleculară</section>
      <section className="capitol">Termodinamică</section>
      <section className="capitol">
        Lichide. Solide. Transformări de fază
      </section>
      <section className="capitol">Electrostatica</section>
      <section className="capitol">Electrocinetica</section>
      <section className="capitol">Curentul electric în diferite medii</section>
    </div>
  );
};

export default Clasa11;
