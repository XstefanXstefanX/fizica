import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";
import Capitol from "../../components/Capitol";

const Clasa11 = () => {
  return (
    <div>
      <Banner image={BannerImg} title={"Clasa XI"} />
      <section className="capitol">
        <Capitol titlu="Teoria cinetico-moleculară" clasa="clasa11" />
      </section>
      <section className="capitol">
        <Capitol titlu="Termodinamică" clasa="clasa11" />
      </section>
      <section className="capitol">
        <Capitol
          titlu="Lichide. Solide. Transformări de fazăs"
          clasa="clasa11"
        />
      </section>
      <section className="capitol">
        <Capitol titlu="Electrostatica" clasa="clasa11" />
      </section>
      <section className="capitol">
        <Capitol titlu="Electrocinetica" clasa="clasa11" />
      </section>
      <section className="capitol">
        <Capitol titlu="Curentul electric în diferite medii" clasa="clasa11" />
      </section>
    </div>
  );
};

export default Clasa11;
