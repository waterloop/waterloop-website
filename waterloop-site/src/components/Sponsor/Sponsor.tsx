import React from "react";

interface Props {
  tier: string;
  src: string;
  alt: string;
};

const Sponsor: React.FC<Props> = (props) => (
  <div className={props.tier}>
    <img src={props.src} alt={props.alt} />
  </div >
);

export default Sponsor;
