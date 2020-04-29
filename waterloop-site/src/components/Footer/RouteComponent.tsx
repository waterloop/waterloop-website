import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type linkProps = {
  link: string;
  title: string;
};

class RouteComponent extends React.Component<linkProps> {
  render() {
    return (
      <Link
        to={this.props.link}
        style={{
          fontFamily: "IBM Plex Sans",
          fontStyle: "normal",
          fontWeight: "normal",
          color: "#FFFFFF",
          opacity: "0.7",
          textDecoration: "none"
        }}
      >
        {this.props.title}
      </Link>
    );
  }
}

export default RouteComponent;
