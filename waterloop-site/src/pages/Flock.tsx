import React from "react";
import styled from "styled-components";
import Hero from "components/Hero/General";
import { GooseRoster } from "components/GooseRoster";
import { SimpleFeatures } from "sections/FeaturedComponent";
import { PastGeeseTimeline as UnstyledPastGeeseTimeline } from "components/PastGeeseTimeline";
import image from "../static/img/goose/feat1.png";
import "../theme/styles.scss";

const PastGeeseTimeline = styled(UnstyledPastGeeseTimeline)``;
var myImgArray = ['https://via.placeholder.com/150', 'https://via.placeholder.com/160', 'https://via.placeholder.com/170'];

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
          <GooseRoster heading="Goose V"
            description="Linear Induction Motor - To scale to Hyperloop speeds, we need contactless propulsion. LIMs provide a way to levitate, stabilize, and propel, all in the same package, and they require a simple metal track with no magnets - perfect for minimizing infrastructure cost."
            imgUrls={myImgArray}> </GooseRoster>
          <div className="break"></div>
          <h4> Features </h4>
          <SimpleFeatures></SimpleFeatures>
          <div className="break"></div>
          <PastGeeseTimeline />
        </div>
      </div >
    );
  }
}

export default Flock;
