import React from "react";
import styled from "styled-components";

const size = {
  mobile: "420px",
  tabletM: "800px",
  tabletL: "1100px"
};

const SponsorComponent = styled.div`
  position: relative;
  width: 495px;
  height: 184px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  background: #f4f4f4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  @media (max-width: ${size.mobile}) {
    height: 184px;
    width: 80%;
    margin-bottom: 5%;
  }
`;

export default SponsorComponent;
