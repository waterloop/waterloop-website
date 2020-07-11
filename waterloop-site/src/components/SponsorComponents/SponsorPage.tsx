import React from "react";
import styled from "styled-components";
import Hypersonic from "./HyperSonic";
import TransSonic from "./TransSonic";
import SuperSonic from "./SuperSonic";
import Sonic from "./Sonic";
import UW_Engineering from "../../components/SponsorComponents/TestingImage/UW_Engineering.png";

const size = {
  mobile: "420px",
  tabletM: "800px",
  tabletL: "1100px",
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: ${size.mobile}) {
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
        <Hypersonic src={UW_Engineering} />
        <Hypersonic src={UW_Engineering} />
      </TierWrapper>

      <CustomHeading>Supersonic Sponsor</CustomHeading>
      <TierWrapper>
        <SuperSonic src={UW_Engineering} />
        <SuperSonic src={UW_Engineering} />
        <SuperSonic src={UW_Engineering} />
        <SuperSonic src={UW_Engineering} />
      </TierWrapper>
      <CustomHeading>Transsonic Sponsor</CustomHeading>
      <TierWrapper>
        <TransSonic src={UW_Engineering} />
        <TransSonic src={UW_Engineering} />
        <TransSonic src={UW_Engineering} />
        <TransSonic src={UW_Engineering} />
        <TransSonic src={UW_Engineering} />
        <TransSonic src={UW_Engineering} />
      </TierWrapper>
      <CustomHeading>Sonic Sponsor</CustomHeading>
      <TierWrapper>
        <Sonic src={UW_Engineering} />
        <Sonic src={UW_Engineering} />
        <Sonic src={UW_Engineering} />
        <Sonic src={UW_Engineering} />
        <Sonic src={UW_Engineering} />
        <Sonic src={UW_Engineering} />
        <Sonic src={UW_Engineering} />
        <Sonic src={UW_Engineering} />
        <Sonic src={UW_Engineering} />
        <Sonic src={UW_Engineering} />
      </TierWrapper>
    </div>
  );
}

export default SponsorList;
