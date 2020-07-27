import React from "react";
import Hero from "components/Hero/Landing"

class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero description="A faster look on the future."></Hero>
                {/* Remove bottom div once done with testing */}
                <div style={{padding: '500px 0'}}></div>    
            </div>
        );
    }
}

export default Home;
