import React from "react";
import Hero from "components/Hero/General"
import GooseRoster from "components/GooseRoster/GooseRoster"
import Img1 from "../static/img/goose/feat1.png";
import Img2 from "../static/img/goose/feat2.png";
import Img3 from "../static/img/goose/feat3.png";

class Flock extends React.Component {
    render() {
        return (
            <div>
                <Hero title="The Flock" description="Learn about our geese."></Hero>
                <GooseRoster imgUrls={[Img1, Img2, Img3]} heading="Goose V" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit."></GooseRoster>
            </div>
        );
    }
}

export default Flock;
