import React from "react";
import styled from "styled-components";
import FooterComponent from "../components/FooterComponent";
import { BrowserRouter as Router } from "react-router-dom";

class MainPage extends React.Component {
  render() {
    return (
      <Router>
        <FooterComponent />;
      </Router>
    );
  }
}

export default MainPage;
