import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";

const Clasa10 = () => {
  return (
    <div>
      <Banner image={BannerImg} title={"Clasa X"} />
      <section className="capitol">Cinematica</section>
      <section className="capitol">Dinamica</section>
      <section className="capitol">
        Impulsul mecanic. Lucrul și energia mecanică
      </section>
      <section className="capitol">Oscilaţii şi unde mecanice</section>
    </div>
  );
};

export default Clasa10;
