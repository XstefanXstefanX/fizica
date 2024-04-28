import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";

const Clasa8 = () => {
  return (
    <div>
      <Banner image={BannerImg} title={"Clasa VIII"} />
      <section className="capitol">Fenomene termice</section>
      <section className="capitol">Fenomene electrice</section>
      <section className="capitol">Unde</section>
      <section className="capitol">Fenomene electromagnetice</section>
    </div>
  );
};

export default Clasa8;
