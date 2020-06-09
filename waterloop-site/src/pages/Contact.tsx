import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ContactForm } from "components/ContactForm";
import { NavBar } from "components/NavBar";
import Hero from "components/Hero/General"
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Hero title="Contact" description="We'd love to get in touch!"></Hero>
                <ContactForm title='Send Us a Message' desc='Lorem ipsum dolor sit amet, partem expetenda mea id, labitur feugiat maiorum ei qui. Et per mucius lucilius, ut brute noster incorrupte nec, eu est alii erat utinam. '></ContactForm>
                {/* <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176 }}
                /> */}
            </div>
        );
    }
}

export default Contact;

