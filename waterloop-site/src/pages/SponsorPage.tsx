import React from "react";
import styled from "styled-components";
import SponsorComponent from "../components/SponsorComponent";

const HypersonicWrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 50px;
  grid-area
`;
// const StartSponsor = styled(SponsorComponent)`
//   grid-column-start: 1;
//   grid-column-end: 4;
//   grid-row-start: 1;
//   grid-row-end: 3;
// `;

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
    </HypersonicWrapper>
  );
}

export default HypersonicSponsor;
