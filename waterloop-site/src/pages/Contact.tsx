import React from "react";
import styled from 'styled-components';
import { ContactForm } from "components/ContactForm";
import Hero from "components/Hero/General"
import MapImg from "../static/img/logos/map.svg"
import { Map, GoogleApiWrapper } from 'google-maps-react';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin-bottom: 2em;
  margin-top: 10em;
`;

const MapContainer = styled.div`
  display: flex;
  min-height: 80vh;
  width: 80%;
  flex-direction: column;
  margin-bottom: 8em; 
  margin-top: 8em;
`;

const MapBox = styled.img`
  margin-top: 3em;
  width: 100%;
  height: 320px;
`;

const mapStyles = {
    width: '100%',
    height: '100%'
};

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Hero title="Contact" description="We'd love to get in touch!"></Hero>
                <Container>
                    <ContactForm title='Send Us a Message' desc='Lorem ipsum dolor sit amet, partem expetenda mea id, labitur feugiat maiorum ei qui. Et per mucius lucilius, ut brute noster incorrupte nec, eu est alii erat utinam. Et per mucius lucilius, ut brute noster incorrupte nec, eu est alii erat utinam'></ContactForm>
                    <MapContainer>
                        <h5>Visit Us</h5>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </h6>
                        <MapBox src={MapImg}></MapBox>
                        {/* <Map
                            google={this.props.google}
                            zoom={8}
                            style={mapStyles}
                            initialCenter={{ lat: 47.444, lng: -122.176 }}
                            
                        /> */}
                    </MapContainer>
                </Container>
            </div>
        );
    }
}

export default Contact;

