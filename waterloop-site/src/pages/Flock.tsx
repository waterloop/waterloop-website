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
            description="Goose V expands upon the LIM design from Goose IV by incorporating it alongside a conservative, scalable and cost-effective subsystem design approach. We also use a DLIM which involves 2 LIMs on either side of the I-beam track to allow for a stronger magnetic field to be maintained. The frame is made of square aluminum tubing and welded in a truss structure, weighing 10 kg in total. Our brakes, manufactured by W.C. Branham, use coiled springs to apply friction to the rail, causing the pod to come to a stop. The battery management system is used to monitor and balance the cell array used to power the LIM and low voltage systems. Our user interface was developed using QT Designer, QML, and C++; it displays sensor data about the pod’s performance, and provides a platform to control the pod remotely."
            imgUrls={myImgArray}
          >
            {" "}
          </GooseRoster>
          <div className="break"></div>
          <h4> Features </h4>
          <SimpleFeatures></SimpleFeatures>
          <div className="break"></div>
          <PastGeeseTimeline />
        </div>
      </div>
    );
  }
}

export default Flock;
