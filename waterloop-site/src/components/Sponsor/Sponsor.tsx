import React from "react";
import styled from "styled-components";

// prop for the child (the sponsor)
type Props = {
  tier: string;
  src: string;
};

class Sponsor extends React.Component<Props> {
  render() {
    return <img className={this.props.tier} src={this.props.src} />;
  }
}

export default Sponsor;
