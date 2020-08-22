import React from "react";
import Sponsor from "./Sponsor";
import Brent from "../../static/img/official-sponsors/BrentsWeldingAndFab.png"
import Weef from "../../static/img/official-sponsors/weef.jpg";
import WaterlooEng from "../../static/img/official-sponsors/wes.jpg";
import UW from "../../static/img/official-sponsors/foe.jpg";
import ClickUp from "../../static/img/official-sponsors/ClickUp.png";
import WCBranham from "../../static/img/official-sponsors/WCBranham.png";
import Ansys from "../../static/img/official-sponsors/ANSYS.png";
import PSIM from "../../static/img/official-sponsors/PSIM.png";
import APP from "../../static/img/official-sponsors/AndersonPowerProducts.png";
import Connexion from "../../static/img/official-sponsors/3dconnexion.png";
import StarTechnology from "../../static/img/official-sponsors/StarTechnology.png";
import Sony from "../../static/img/official-sponsors/sony.png";
import WPrint from "../../static/img/official-sponsors/WPrint.png";
import Wera from "../../static/img/official-sponsors/Wera.png";
import Overleaf from "../../static/img/official-sponsors/overleaf_wide_colour_light_bg.png"
import Altium from "../../static/img/official-sponsors/altium.jpg";
import L3harris from "../../static/img/official-sponsors/l3harris.png";
import Mitutoyo from "../../static/img/official-sponsors/mitutoyo.png";


function SponsorList() {
  return (
    <div className="SponsorPage">
      <h1>Our Sponsors</h1>
      <h1>Hypersonic</h1>
      <div className="TierWrapper">
        <Sponsor src={UW} tier="hypersonic" alt="sponsor" />
        <Sponsor src={WaterlooEng} tier="hypersonic" alt="sponsor" />
        <Sponsor src={Weef} tier="hypersonic" alt="sponsor" />
        <Sponsor src={Brent} tier="hypersonic" alt="sponsor" />
      </div>
      <h1>Supersonic</h1>
      <div className="TierWrapper">
        <Sponsor src={ClickUp} tier="supersonic" alt="sponsor" />
        <Sponsor src={WCBranham} tier="supersonic" alt="sponsor" />
      </div>
      <h1>Transonic</h1>
      <div className="TierWrapper">
        <Sponsor src={Ansys} tier="transonic" alt="sponsor" />
        <Sponsor src={PSIM} tier="transonic" alt="sponsor" />
      </div>
      <h1>Sonic</h1>
      <div className="TierWrapper">
        <Sponsor src={APP} tier="sonic" alt="sponsor" />
        <Sponsor src={Connexion} tier="sonic" alt="sponsor" />
        <Sponsor src={StarTechnology} tier="sonic" alt="sponsor" />
        <Sponsor src={Sony} tier="sonic" alt="sponsor" />
        <Sponsor src={WPrint} tier="sonic" alt="sponsor" />
        <Sponsor src={Wera} tier="sonic" alt="sponsor" />
        <Sponsor src={Overleaf} tier="sonic" alt="sponsor" />
        <Sponsor src={Altium} tier="sonic" alt="sponsor" />
        <Sponsor src={L3harris} tier="sonic" alt="sponsor" />
        <Sponsor src={Mitutoyo} tier="sonic" alt="sponsor" />
      </div>
    </div>
  );
}

export default SponsorList;
