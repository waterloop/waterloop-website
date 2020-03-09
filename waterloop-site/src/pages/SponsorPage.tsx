import React from "react";
import styled from "styled-components";
import SponsorComponent from "../components/SponsorComponent";

const size = {
  mobile: "420px",
  tabletM: "800px",
  tabletL: "1100px"
};
const CustomHeading = styled.h1`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 47px;
  text-align: center;
`;

const HypersonicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${size.mobile}) {
    /* position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    max-width: 80%; */
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    top: 10%;
    left: 10%;
  }
`;

function HypersonicSponsor() {
  return (
    <div>
      <CustomHeading>Hypersonic Sponsor</CustomHeading>
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
    </div>
  );
}

export default HypersonicSponsor;
