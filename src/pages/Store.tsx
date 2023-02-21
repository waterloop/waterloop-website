import React from "react";
import Hero from "components/Hero/General";
import "../theme/styles.scss";

const Store: React.FC = () => (
  <div>
    <Hero
      title="SHOP WATERLOOP"
      description="Wear official merchandise."
      anchor="#store"
    ></Hero>
    <div id="#store"></div>
    <div className="pageContainer">
    </div>
  </div>
);

export default Store;
