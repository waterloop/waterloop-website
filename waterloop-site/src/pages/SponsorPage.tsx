import React from "react";
import styled from "styled-components";
import SponsorComponent from "../components/SponsorComponent";
import Hypersonic from "../components/SponsorComponents/HyperSonic"
import TransSonic from "../components/SponsorComponents/TransSonic";
import SuperSonic from "../components/SponsorComponents/SuperSonic";
import Sonic from "../components/SponsorComponents/Sonic";
import UW_Engineering from "../components/SponsorComponents/TestingImage/UW_Engineering.png"


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

function SponsorList() {
  return (
    <div>
      <CustomHeading>Hypersonic Sponsor</CustomHeading>
      <TierWrapper>
        <Hypersonic/>
        <Hypersonic/>
      </TierWrapper>

      <CustomHeading>Supersonic Sponsor</CustomHeading>
      <TierWrapper>
        <SuperSonic src = {UW_Engineering}/>
        <SuperSonic src = {UW_Engineering}/>
        <SuperSonic src = {UW_Engineering}/>
        <SuperSonic src = {UW_Engineering}/>
    </TierWrapper>
      <CustomHeading>Transsonic Sponsor</CustomHeading>
      <TierWrapper>
        <TransSonic src = {UW_Engineering}/>
        <TransSonic src = {UW_Engineering}/>
        <TransSonic src = {UW_Engineering}/>
        <TransSonic src = {UW_Engineering}/>
        <TransSonic src = {UW_Engineering}/>
        <TransSonic src = {UW_Engineering}/>
      </TierWrapper>
      <CustomHeading>Sonic Sponsor</CustomHeading>
      <TierWrapper>
        <Sonic src = {UW_Engineering}/>
        <Sonic src = {UW_Engineering}/>
        <Sonic src = {UW_Engineering}/>
        <Sonic src = {UW_Engineering}/>
        <Sonic src = {UW_Engineering}/>
        <Sonic src = {UW_Engineering}/>
        <Sonic src = {UW_Engineering}/>
        <Sonic src = {UW_Engineering}/>
        <Sonic src = {UW_Engineering}/>
        <Sonic src = {UW_Engineering}/>
      </TierWrapper>
    </div>
  );
}

export default SponsorList;
