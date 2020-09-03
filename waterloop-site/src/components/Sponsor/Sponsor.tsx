import React from "react";

// prop for the child (the sponsor)
type Props = {
  tier: string;
  src: string;
  alt: string;
};

class Sponsor extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.tier}>
        <img src={this.props.src} alt={this.props.alt} />
      </div >
    );
  }
}

export default Sponsor;
