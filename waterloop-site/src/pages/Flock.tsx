import React from "react";
import Hero from "components/Hero/General";
import { GooseRoster } from "components/GooseRoster";
import { SimpleFeatComp } from "components/SimpleFeatures";
import image from "../static/img/goose/feat1.png";

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
          <GooseRoster heading="Goose V" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit." imgUrls={myImgArray}> </GooseRoster>
          <div className="break"></div>
          <h4> Features </h4>
          <SimpleFeatComp imgSrc={image} imgAlt="test" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."></SimpleFeatComp>
          <SimpleFeatComp imgSrc={image} imgAlt="test" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."></SimpleFeatComp>
          <SimpleFeatComp imgSrc={image} imgAlt="test" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."></SimpleFeatComp>
        </div>
      </div>
    );
  }
}

export default Flock;
