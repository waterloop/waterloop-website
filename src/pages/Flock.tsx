import React from "react";
import styled from "styled-components";
import Hero from "components/Hero/General";
import { GooseRoster } from "components/GooseRoster";
import { SimpleFeatures } from "sections/FeaturedComponent";
import { PastGeeseTimeline as UnstyledPastGeeseTimeline } from "components/PastGeeseTimeline";
import Goose1 from "../static/img/goose/Goose.png";
import Goose2 from "../static/img/goose/Goose1.png";
import "../theme/styles.scss";

const PastGeeseTimeline = styled(UnstyledPastGeeseTimeline)``;

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

const Goose5 = [Goose1, Goose2];

const Flock: React.FC = () => (
  <div>
    <Hero
      title="THE FLOCK"
      description="Learn about our geese."
      anchor="#flock"
    ></Hero>
    <div id={"#flock"}></div>
    <div className="pageContainer">
      <Container>
        <GooseRoster
          heading="Goose V"
          description="Our 'flock' of Hyperloop pods has developed in sophistication over 5 iterations of research and development. Take a look at the major features of our latest pod and the history of its development!"
          imgUrls={Goose5}
        ></GooseRoster>
        <div className="break"></div>
        <h2> Features </h2>
        <SimpleFeatures />
        <div className="break"></div>
        <PastGeeseTimeline />
      </Container>
    </div>
  </div>
);

export default Flock;
