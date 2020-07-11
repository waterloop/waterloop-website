import React from "react";

// prop for the child (the sponsor)
type Props = {
  tier: string;
  src: string;
  alt: string;
};

class Sponsor extends React.Component<Props> {
  render() {
    return <img className={this.props.tier} src={this.props.src} alt={this.props.alt} />;
  }
}

export default Sponsor;
