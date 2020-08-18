import React from "react";
import Sponsor from "./Sponsor";
import UW_Engineering from "../../components/Sponsor/TestingImage/UW_Engineering.png";
import Test from "../../static/img/sponsors/test1.jpg";

function SponsorList() {
  return (
    <div className="SponsorPage">
      <h1>Our Sponsors</h1>
      <h1>Hypersonic</h1>
      <div className="TierWrapper">
        <Sponsor src={Test} tier="hypersonic" alt="sponsor" />
        <Sponsor src={Test} tier="hypersonic" alt="sponsor" />
      </div>
      <h1>Supersonic</h1>
      <div className="TierWrapper">
        <Sponsor src={Test} tier="supersonic" alt="sponsor" />
        <Sponsor src={Test} tier="supersonic" alt="sponsor" />
      </div>
      <h1>Transonic</h1>
      <div className="TierWrapper">
        <Sponsor src={Test} tier="transonic" alt="sponsor" />
        <Sponsor src={Test} tier="transonic" alt="sponsor" />
        <Sponsor src={Test} tier="transonic" alt="sponsor" />
        <Sponsor src={Test} tier="transonic" alt="sponsor" />
      </div>
      <h1>Sonic</h1>
      <div className="TierWrapper">
        <Sponsor src={Test} tier="sonic" alt="sponsor" />
        <Sponsor src={Test} tier="sonic" alt="sponsor" />
      </div>
    </div>
  );
}

export default SponsorList;
