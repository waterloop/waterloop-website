import React from "react";
import Hero from "components/Hero/General";
import SponsorList from "components/Sponsor/SponsorPage";

class Sponsors extends React.Component {
  render() {
    return (
      <div>
        <Hero
          title="Support Our Team"
          description="Help fund the future."
        ></Hero>
        <SponsorList></SponsorList>
      </div>
    );
  }
}

export default Sponsors;
