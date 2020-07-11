import React from "react";
import Sponsor from "./Sponsor";
import UW_Engineering from "../../components/Sponsor/TestingImage/UW_Engineering.png";

function SponsorList() {
  return (
    <div className="SponsorPage">
      <h1>Hypersonic</h1>
      <div className="TierWrapper">
        <Sponsor src={UW_Engineering} tier="hypersonic" alt="sponsor" />
        <Sponsor src={UW_Engineering} tier="hypersonic" alt="sponsor" />
      </div>
      <h1>Supersonic</h1>
      <div className="TierWrapper">
        <Sponsor src={UW_Engineering} tier="supersonic" alt="sponsor" />
        <Sponsor src={UW_Engineering} tier="supersonic" alt="sponsor" />
      </div>
      <h1>Transonic</h1>
      <div className="TierWrapper">
        <Sponsor src={UW_Engineering} tier="transonic" alt="sponsor" />
        <Sponsor src={UW_Engineering} tier="transonic" alt="sponsor" />
        <Sponsor src={UW_Engineering} tier="transonic" alt="sponsor" />
        <Sponsor src={UW_Engineering} tier="transonic" alt="sponsor" />
      </div>
      <h1>Sonic</h1>
      <div className="TierWrapper">
        <Sponsor src={UW_Engineering} tier="sonic" alt="sponsor" />
        <Sponsor src={UW_Engineering} tier="sonic" alt="sponsor" />
      </div>
    </div>
  );
}

export default SponsorList;
