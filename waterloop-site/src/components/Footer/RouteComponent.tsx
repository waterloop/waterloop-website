import React from "react";
import { Redirect } from "react-router";
import { v1 as uuid } from "uuid";

type linkProps = {
  link: string;
  title: string;
};

class RouteComponent extends React.Component<linkProps> {
  handleClick() {
    let linkTarget = {
      pathname: this.props.link,
      key: uuid(),
      state: {
        applied: true,
      },
    };
    window.location.reload();
    return <Redirect to={linkTarget} />;
  }
  render() {
    return (
      <a
        style={{
          fontFamily: "IBM Plex Sans",
          fontStyle: "normal",
          fontWeight: "normal",
          color: "#FFFFFF",
          opacity: "0.7",
          textDecoration: "none",
        }}
        onClick={() => this.handleClick}
      >
        {this.props.title}
      </a>
    );
  }
}

export default RouteComponent;
