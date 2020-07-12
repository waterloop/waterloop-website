import React from "react";
import styled from "styled-components";
import { ContactForm } from "components/ContactForm";
import Hero from "components/Hero/General";
// import MapImg from "../static/img/logos/map.svg";
// import { Map, GoogleApiWrapper } from "google-maps-react";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin-bottom: 2em;
  margin-top: 10em;
`;

const MapContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;

  > div {
    margin: 5vh 0;
    display: flex;
    justify-content: center;
  }
`;

function createMarkup() {
  return {
    __html:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/AvfiJOLqlR4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  };
}

function EmbeddedMap() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Hero title="Contact" description="We'd love to get in touch!"></Hero>
        <Container>
          <ContactForm
            title="Send Us a Message"
            desc="Lorem ipsum dolor sit amet, partem expetenda mea id, labitur feugiat maiorum ei qui. Et per mucius lucilius, ut brute noster incorrupte nec, eu est alii erat utinam. Et per mucius lucilius, ut brute noster incorrupte nec, eu est alii erat utinam"
          ></ContactForm>
          <MapContainer>
            <h5>Visit Us</h5>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </h6>
            {/* <MapBox src={MapImg}></MapBox> */}
            <EmbeddedMap></EmbeddedMap>
          </MapContainer>
        </Container>
      </div>
    );
  }
}

export default Contact;
