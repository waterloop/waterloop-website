import React from "react";
import styled from "styled-components";
import Hero from "components/Hero/General";
import { GooseRoster } from "components/GooseRoster";
import { SimpleFeatComp } from "components/SimpleFeatures";
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
            description="Goose V expands upon the LIM design from Goose IV by incorporating it alongside a conservative, scalable and cost-effective subsystem design approach. We also use a DLIM which involves 2 LIMs on either side of the I-beam track to allow for a stronger magnetic field to be maintained. The frame is made of square aluminum tubing and welded in a truss structure, weighing 10 kg in total. Our brakes, manufactured by W.C. Branham, use coiled springs to apply friction to the rail, causing the pod to come to a stop. The battery management system is used to monitor and balance the cell array used to power the LIM and low voltage systems. Our user interface was developed using QT Designer, QML, and C++; it displays sensor data about the pod’s performance, and provides a platform to control the pod remotely."
            imgUrls={myImgArray}> </GooseRoster>
          <div className="break"></div>
          <h4> Features </h4>
          <SimpleFeatComp imgSrc={image} imgAlt="LIM"
            desc="Like a Rotary Induction Motor but cut up on its centre axis and with the stator and rotor unrolled flat, a linear induction motor produces thrust through a linear force rather than through torque. This allows it to function on an unpowered conductive track, thereby saving costs in maintenance and per-unit track costs. Despite the disadvantage of end effects (or 'turbulence') leading to lower speeds, the LIM offers contactless propulsion on a simpler track such as an aluminum one. Furthermore, the LIM allows for a centralized design that reduces the weight of the entire pod, and there are a variety of opportunities to scale up the LIM design and promises of better levitation technologies to use with the LIM. We use the DLIM (or Double-sided LIM) design, which involves 2 LIMs on either side of the I-beam track, to allow for a stronger magnetic field to be maintained.">
          </SimpleFeatComp>
          <SimpleFeatComp imgSrc={image} imgAlt="Frame"
            desc="The main structural component of the pod, the frame houses all of the pod's mechanical and electrical subsytems. Made from 6061-T6 square aluminum tubing, the frame is welded in a truss structure and weighs 10 kg. The material and construction of the frame is designed to withstand all acceleration, braking, vibration and structural loads during the run.">
          </SimpleFeatComp>
          <SimpleFeatComp imgSrc={image} imgAlt="Braking"
            desc="The brakes are designed to slow the pod to a stop, whether the pod has reached its top speed, experienced a failure or to hold the pod stationary on the rail when powered off. For Competition V, we used industry-leading Hyperloop-spec brakes produced by W.C. Branham in the USA. The brakes use coiled springs to apply the friction pads to the rail, and they are bolted to the frame with a support plate to ensure a robust mechanical system. The brakes are placed at the front and rear of the pod to maximize stopping force.">
          </SimpleFeatComp>
          <div className="break"></div>
          <PastGeeseTimeline />
        </div>
      </div >
    );
  }
}

export default Flock;
