import React from "react";
import styled from "styled-components";
import { ContactForm } from "components/ContactForm";
import Hero from "components/Hero/General";
import GoogleMapReact from 'google-map-react';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin-bottom: 2em;
  margin-top: 10em;
`;

const LocationContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;

  > div {
    margin: 5vh 0;
    display: flex;
    justify-content: center;
  }
`;

const MapContainer = styled.div`
  display: flex;
  height: 50vh;
  width: 80vw;
`;

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Hero
          title="Contact"
          description="We'd love to get in touch!"
          anchor="#contact-form"
        ></Hero>
        <div id={"#contact-form"}></div>
        <Container>
          <ContactForm
            title="Send Us a Message"
            desc="Lorem ipsum dolor sit amet, partem expetenda mea id, labitur feugiat maiorum ei qui. Et per mucius lucilius, ut brute noster incorrupte nec, eu est alii erat utinam. Et per mucius lucilius, ut brute noster incorrupte nec, eu est alii erat utinam"
          ></ContactForm>
          <LocationContainer>
            <h5>Visit Us</h5>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </h6>
            <MapContainer>
              <GoogleMapReact
                //we will need to hide this API key before we launch 
                bootstrapURLKeys={{ key: "AIzaSyCGLLjvTMb0xjl - I3 - Dyqp9aJGSIvvh4GA" }}
                defaultCenter={{ lat: 43.4723, lng: -80.5449 }}
                defaultZoom={17}
              ></GoogleMapReact>
            </MapContainer>
          </LocationContainer>
        </Container>
      </div >
    );
  }
}

export default Contact;
