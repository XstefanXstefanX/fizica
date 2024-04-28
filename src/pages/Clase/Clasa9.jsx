import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";

const Clasa9 = () => {
  return (
    <div>
      <Banner image={BannerImg} title={"Clasa IX"} />
      <section className="capitol">Optică Geometrică</section>
      <section className="capitol">Interacțiuni prin câmpuri</section>
      <section className="capitol">Câmpuri</section>
      <section className="capitol">Undele electromagnetice</section>
      <section className="capitol">Nucleul atomic. Reacții nucleare</section>
    </div>
  );
};

export default Clasa9;
