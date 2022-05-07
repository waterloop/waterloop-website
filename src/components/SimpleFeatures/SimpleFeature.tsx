import React from "react";
import "../../theme/styles.scss";

export interface FeatProps {
  imgSrc: string;
  imgAlt: string;
  header: string;
  desc: string;
}

const SimpleFeatComp: React.FC<FeatProps> = (props) => (
  <div className="featComp">
    <div className="FeatCol">
      <h3>{props.header}</h3>
      <p className="FeatPara">{props.desc}</p>
    </div>
    <img
      className="FeatImage"
      src={props.imgSrc}
      alt={props.imgAlt}
    />
  </div>
);

export default SimpleFeatComp;
