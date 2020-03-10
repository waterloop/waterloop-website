import React from "react";
import styled from "styled-components";
import { variant } from "styled-system";

const size = {
  mobile: "420px",
  tabletM: "800px",
  tabletL: "1100px"
};

const SponsorComponent = styled("div")({
  position: "relative",
  width: "80%",
  height: "250px",
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  background: "#f4f4f4",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "15px",
  "@media (max-width: ${size.mobile})": {
    height: "184px",
    width: "80%",
    marginNottom: "5%"
  }
});

export default SponsorComponent;
