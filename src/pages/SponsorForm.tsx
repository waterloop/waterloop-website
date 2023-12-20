import React from "react";                                      // Import React Framework
import Hero from "components/Hero/General";                     // Import Hero Component
import "../theme/styles.scss";                                  // Import Styles
import { ContactForm } from "components/ContactForm";           // Import Contact Form

const SponsorForm: React.FC = () => (
    <div>
        <Hero
            title = "Sponsor Us Today!"
            description = "We look forward to working with you!"
            anchor = "#sponsor-form"
        ></Hero>
        <div id = "#sponsor-form"></div>
        <div className = "pageContainer">
            <div className = "contactFormContainer">

                <ContactForm
                    title = "Sponsor Us Today!"
                    desc = "Want to sponsor us? Fill out this form below!"
                ></ContactForm>

            </div>
        </div>
    </div>
);

export default SponsorForm;