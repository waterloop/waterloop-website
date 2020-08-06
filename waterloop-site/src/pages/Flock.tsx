import React from "react";
import styled from "styled-components";
import Hero from "components/Hero/General"
import { PastGeeseTimeline as UnstyledPastGeeseTimeline } from "components/PastGeeseTimeline";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PastGeeseTimeline = styled(UnstyledPastGeeseTimeline)``;

class Flock extends React.Component {
  render() {
    return (
      <Container>
        <Hero
          title="The Flock"
          description="Learn about our geese."
          anchor="#flock"
        ></Hero>
        <div id={"#flock"}></div>
        <PastGeeseTimeline />
      </Container>
    );
  }
}

export default Flock;
