import React from "react";
import "../../theme/preloader.scss";

const Preloader: React.FC = () => (
  <div className="content">
    <div className="loading">
      <p>loading</p>
      <span></span>
    </div>
  </div>
);

export default Preloader;
