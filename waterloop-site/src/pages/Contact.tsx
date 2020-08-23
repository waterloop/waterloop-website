import React from "react";
import { ContactForm } from "components/ContactForm";
import Hero from "components/Hero/General";
import GoogleMapReact from "google-map-react";
import "../theme/styles.scss";
import { MAP } from "../config/map";

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
        <div className="pageContainer">
          <div className="contactFormContainer">
            <ContactForm
              title="Send Us a Message"
              desc="Want to get in touch? Submit this form or drop us a message at hello@waterloop.ca."
            ></ContactForm>
            <div className="locationContainer">
              <h5>Visit Us</h5>
              <div className="mapContainer">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: MAP,
                  }}
                  defaultCenter={{ lat: 43.4723, lng: -80.5449 }}
                  defaultZoom={17}
                ></GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
