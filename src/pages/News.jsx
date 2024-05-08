import React from "react";
import BannerImg from "../images/news-banner.jpg";
import Banner from "../components/Banner";
const News = () => {
  return (
    <div>
      <Banner image={BannerImg} title={"CEI NOU?"} />
    </div>
  );
};

export default News;
