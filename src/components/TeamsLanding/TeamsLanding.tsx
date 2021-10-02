import React from "react";
import "../../theme/styles.scss";

interface Props {
  subteam: string;
  description: string;
  image: string;
};

const SubteamsOverview: React.FC<Props> =  (props) => (
  <div className="Block-Teams">
    <img className="Img-Teams" src={props.image} alt="teams"></img>
    <div className="TextBlock-Teams">
      <h2 className="Header-Teams">{props.subteam}</h2>
      <p className="Text-Teams">{props.description}</p>
    </div>
  </div>
);

export default SubteamsOverview;
