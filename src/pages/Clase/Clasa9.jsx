import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";
import Capitol from "../../components/Capitol";

const Clasa9 = () => {
  return (
    <div>
      <Banner image={BannerImg} title={"Clasa IX"} />
      <section className="capitol">
        <Capitol titlu="Optică Geometrică" clasa="clasa9" />
      </section>
      <section className="capitol">
        <Capitol titlu="Interacțiuni prin câmpuri" clasa="clasa9" />
      </section>
      <section className="capitol">
        <Capitol titlu="Câmpuri" clasa="clasa9" />
      </section>
      <section className="capitol">
        <Capitol titlu="Undele electromagnetice" clasa="clasa9" />
      </section>
      <section className="capitol">
        <Capitol titlu="Nucleul atomic. Reacții nucleare" clasa="clasa9" />
      </section>
    </div>
  );
};

export default Clasa9;
