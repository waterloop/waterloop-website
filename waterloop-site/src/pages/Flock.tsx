import React from "react";
import styled from "styled-components";
import Hero from "components/Hero/General";
import { GooseRoster } from "components/GooseRoster";
import { SimpleFeatures } from "sections/FeaturedComponent";
import { PastGeeseTimeline as UnstyledPastGeeseTimeline } from "components/PastGeeseTimeline";
import image from "../static/img/goose/feat1.png";
import "../theme/styles.scss";

const PastGeeseTimeline = styled(UnstyledPastGeeseTimeline)``;
var myImgArray = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/160",
  "https://via.placeholder.com/170",
];

class Flock extends React.Component {
  render() {
    return (
      <div>
        <Hero
          title="The Flock"
          description="Learn about our geese."
          anchor="#flock"
        ></Hero>
        <div id={"#flock"}></div>
        <div className="pageContainer">
          <GooseRoster
            heading="Goose V"
            description="Our 'flock' of Hyperloop pods has developed in sophistication over 5 iterations of research and development. Take a look at the major features of our pod and the history of its development!"
            imgUrls={myImgArray}
          >
          </GooseRoster>
          <div className="break"></div>
          <h2> Features </h2>
          <SimpleFeatures></SimpleFeatures>
          <div className="break"></div>
          <PastGeeseTimeline />
        </div>
      </div>
    );
  }
}

export default Flock;
