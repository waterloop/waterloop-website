import React from "react";
import styled from "styled-components";
import "./styling/TestComponent.css";

type MyProps = { link: string; title: string };

class TestComponent extends React.Component<MyProps> {
  render() {
    return (
      <a className="btn" target="_blank" href={this.props.link}>
        <h2>{this.props.title}</h2>
      </a>
    );
  }
}

export default TestComponent;
