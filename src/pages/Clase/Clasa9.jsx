import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";
import Capitol from "../../components/Capitol";

const Clasa9 = () => {
  return (
    <div>
      <Banner image={BannerImg} title={"Clasa IX"} />
      <h1 className="teme-produs">
        <span>Teme</span> de Produs
      </h1>
      <section className="capitol">
        <Capitol titlu="Algebră" clasa="clasa9" />
      </section>
      <section className="capitol">
        <Capitol titlu="Geometria" clasa="clasa9" />
      </section>
    </div>
  );
};

export default Clasa9;
