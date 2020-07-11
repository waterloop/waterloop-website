import React from "react";
import Sponsor from "./Sponsor";
import UW_Engineering from "../../components/Sponsor/TestingImage/UW_Engineering.png";

function SponsorList() {
  return (
    <div className="SponsorPage">
      <h1>Hypersonic</h1>
      <div className="TierWrapper">
        <Sponsor src={UW_Engineering} tier="hypersonic" />
        <Sponsor src={UW_Engineering} tier="hypersonic" />
      </div>
      <h1>Supersonic</h1>
      <div className="TierWrapper">
        <Sponsor src={UW_Engineering} tier="supersonic" />
        <Sponsor src={UW_Engineering} tier="supersonic" />
      </div>
      <h1>Transonic</h1>
      <div className="TierWrapper">
        <Sponsor src={UW_Engineering} tier="transonic" />
        <Sponsor src={UW_Engineering} tier="transonic" />
        <Sponsor src={UW_Engineering} tier="transonic" />
        <Sponsor src={UW_Engineering} tier="transonic" />
      </div>
      <h1>Sonic</h1>
      <div className="TierWrapper">
        <Sponsor src={UW_Engineering} tier="sonic" />
        <Sponsor src={UW_Engineering} tier="sonic" />
      </div>
    </div>
  );
}

export default SponsorList;
