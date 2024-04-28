import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";

const Clasa12 = () => {
  return (
    <div>
      <Banner image={BannerImg} title={"Clasa XII"} />
      <section className="capitol">Oscilaţii şi unde electromagnetice</section>
      <section className="capitol">
        Elemente de teoria relativităţii restrânse
      </section>
      <section className="capitol">Elemente de fizică cuantică</section>
      <section className="capitol">Elemente de fizică a atomului</section>
      <section className="capitol">
        Elemente de fizică a nucleului atomic
      </section>
      <section className="capitol">Elemente de astronomie</section>
    </div>
  );
};

export default Clasa12;
