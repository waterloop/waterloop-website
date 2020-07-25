import React from "react";
import Hero from "components/Hero/Landing"
import {Sponsors} from "components/SponsorsLanding"
import {ImgJSON} from "components/SponsorsLanding";

// Images for sponsors:
import BrentsWeldingAndFab from "../static/img/sponsors/BrentsWeldingAndFab.png";
import UW_Engineering from "../static/img/sponsors/UW_Engineering.png";
import UW_Engineering_Endowment from "../static/img/sponsors/UW_Engineering_Endowment.png";
import UW_Engineering_Society from "../static/img/sponsors/UW_Engineering_Society.png";
import ClickUp from "../static/img/sponsors/ClickUp.png";
import WCBranham from "../static/img/sponsors/WCBranham.png";

const imgJSON: ImgJSON[] = [
    {imgSrc: BrentsWeldingAndFab, imgAlt: 'Brent\'s Welding and Fabrication Inc.'},
    {imgSrc: UW_Engineering, imgAlt: 'Waterloo Engineering'},
    {imgSrc: UW_Engineering_Endowment, imgAlt: 'Waterloo Engineering Endowment Fund'},
    {imgSrc: UW_Engineering_Society, imgAlt: 'Waterloo Engineering Society'},
    {imgSrc: ClickUp, imgAlt: 'ClickUp LLC.'},
    {imgSrc: WCBranham, imgAlt: 'W.C. Branham Ltd.'}
];

class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero description="A faster look on the future."></Hero>
                {/* !TODO: Remove this once done testing. */}
                <Sponsors data={imgJSON}/>
            </div>
        );
    }
}

export default Home;
