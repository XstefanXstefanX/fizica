import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";
import Capitol from "../../components/Capitol";

const Clasa10 = () => {
  return (
    <div>
      <Banner image={BannerImg} title={"Clasa X"} />
      <section className="capitol">
        <Capitol titlu="Cinematica" clasa="clasa10" />
      </section>
      <section className="capitol">
        <Capitol titlu="Dinamica" clasa="clasa10" />
      </section>
      <section className="capitol">
        <Capitol
          titlu="Impulsul mecanic. Lucrul și energia mecanică"
          clasa="clasa10"
        />
      </section>
      <section className="capitol">
        <Capitol titlu="Oscilaţii şi unde mecanice" clasa="clasa10" />
      </section>
    </div>
  );
};

export default Clasa10;
