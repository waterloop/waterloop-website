import React from "react";
import Hero from "components/Hero/General"

class Flock extends React.Component {
    render() {
        return (
            <div>
                <Hero title="The Flock" description="Learn about our geese."></Hero>
                <div style={{marginTop: '500px'}}></div>
            </div>
        );
    }
}

export default Flock;
