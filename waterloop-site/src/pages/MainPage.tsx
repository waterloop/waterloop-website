import React from "react";
import styled from "styled-components";
import FooterComponent from "../components/FooterComponent";
import Recruitment from "./Recruitment";
import { BrowserRouter as Router } from "react-router-dom";

const ContentWrapper = styled.div`
  position: relative;
`;

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Recruitment />;
          <FooterComponent />;
        </Router>
      </div>
    );
  }
}

export default MainPage;
