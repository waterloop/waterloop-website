import React from "react";
import styled from "styled-components";

type linkProps = {
  link: string;
  title: string;
};

class LinkComponent extends React.Component<linkProps> {
  render() {
    return (
      <a
        target="_blank"
        href={this.props.link}
        style={{
          fontFamily: "IBM Plex Sans",
          fontStyle: "normal",
          fontWeight: "normal",
          color: "#FFFFFF", //NEED TO CHANGE LATER #FFFFFFF
          opacity: "0.7",
          textDecoration: "none",
        }}
      >
        {this.props.title}
      </a>
    );
  }
}

export default LinkComponent;
