import React from "react";
import styled from "styled-components";
import { variant, space } from "styled-system";

const size = {
  mobile: "420px",
  tabletM: "800px",
  tabletL: "1100px"
};

interface SponsorComponentInterface {
  variant?: string;
}

const SponsorComponent = styled("div")<SponsorComponentInterface>(
  {
    position: "relative",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    background: "#f4f4f4",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "15px",
    "@media (max-width: ${size.mobile})": {
      height: "184px",
      width: "80%",
      marginBottom: "5%"
    }
  },
  variant({
    variants: {
      Hypersonic: {
        width: "80%",
        height: "250px"
      }
    }
  })
);

export default SponsorComponent;
