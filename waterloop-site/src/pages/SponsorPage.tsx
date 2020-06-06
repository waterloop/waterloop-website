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

const TierWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;


  @media (min-width: ${size.mobile}) {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

function HypersonicSponsor() {
  return (
    <div>
      <CustomHeading>Hypersonic Sponsor</CustomHeading>
      <TierWrapper>
        <SponsorComponent variant="Hypersonic" />
        <SponsorComponent variant="Hypersonic" />
      </TierWrapper>

      <CustomHeading>Supersonic Sponsor</CustomHeading>
      <TierWrapper>
        <SponsorComponent variant="Supersonic" />
        <SponsorComponent variant="Supersonic" />
        <SponsorComponent variant="Supersonic" />
        <SponsorComponent variant="Supersonic" />
      </TierWrapper>
      <CustomHeading>Transsonic Sponsor</CustomHeading>
      <TierWrapper>
        <SponsorComponent variant="Transsonic" />
        <SponsorComponent variant="Transsonic" />
        <SponsorComponent variant="Transsonic" />
        <SponsorComponent variant="Transsonic" />
        <SponsorComponent variant="Transsonic" />
        <SponsorComponent variant="Transsonic" />
      </TierWrapper>
      <CustomHeading>Sonic Sponsor</CustomHeading>
      <TierWrapper>
        <SponsorComponent variant="Sonic" />
        <SponsorComponent variant="Sonic" />
        <SponsorComponent variant="Sonic" />
        <SponsorComponent variant="Sonic" />
        <SponsorComponent variant="Sonic" />
        <SponsorComponent variant="Sonic" />
        <SponsorComponent variant="Sonic" />
        <SponsorComponent variant="Sonic" />
        <SponsorComponent variant="Sonic" />
        <SponsorComponent variant="Sonic" />
      </TierWrapper>
    </div>
  );
}

export default HypersonicSponsor;
