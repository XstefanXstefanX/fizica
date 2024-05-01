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
        Oscilaţii şi unde electromagnetice"
          clasa="clasa12"
        />
      </section>
      <section className="capitol">
        <Capitol
          titlu="Elemente de teoria relativităţii restrânse"
          clasa="clasa12"
        />
      </section>
      <section className="capitol">
        <Capitol titlu="Elemente de fizică cuantică" clasa="clasa12" />
      </section>
      <section className="capitol">
        <Capitol titlu="Elemente de fizică a atomuluis" clasa="clasa12" />
      </section>
      <section className="capitol">
        <Capitol
          titlu="Elemente de fizică a nucleului atomic"
          clasa="clasa12"
        />
      </section>
      <section className="capitol">
        <Capitol titlu="Elemente de astronomie" clasa="clasa12" />
      </section>
    </div>
  );
};

export default Clasa12;
