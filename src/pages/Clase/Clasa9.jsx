import React from "react";
import BannerImg from "../../images/clase-banner.jpg";
import Banner from "../../components/Banner";
import Capitol from "../../components/Capitol";
import DisplayPresentations from "../../components/DisplayPresentations";
import AddCanvaPresentations from "../../components/AddCanvaPresentations";

const Clasa9 = () => {
  return (
    <div>
      <Banner image={BannerImg} title={"Clasa IX"} />
      <h1 className="teme-produs">
        <span>Încarcă</span> Temele de Produs
      </h1>
      <section className="capitol">
        <Capitol titlu="Algebră" clasa="clasa9" />
      </section>
      <section className="capitol">
        <Capitol titlu="Geometria" clasa="clasa9" />
      </section>
      <AddCanvaPresentations class="clasa-9" />
      <DisplayPresentations class="clasa-9" />
    </div>
  );
};

export default Clasa9;
