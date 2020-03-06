import React from "react";
import styled from "styled-components";
import SponsorComponent from "../components/SponsorComponent";

const size = {
  mobile: "420px",
  tabletM: "800px",
  tabletL: "1100px"
};

const HypersonicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${size.mobile}) {
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    max-width: 80%;
    top: 10%;
    left: 10%;
  }
`;

function HypersonicSponsor() {
  return (
    <HypersonicWrapper>
      <SponsorComponent />
      <SponsorComponent />
      <SponsorComponent />
      <SponsorComponent />
      <SponsorComponent />
      <SponsorComponent />
      <SponsorComponent />
      <SponsorComponent />
      <SponsorComponent />
    </HypersonicWrapper>
  );
}

export default HypersonicSponsor;
