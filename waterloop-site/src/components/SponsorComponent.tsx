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
    marginBottom: "20px",
    marginLeft:"10px",
    display: "flex",
    alignItems: "center",
    background: "#f4f4f4",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "15px",
    overflow: "none",
    maxWidth:"650px"
  },
  variant({
    variants: {
      Hypersonic: {
        width: "60%",
        height: "250px",
        "@media screen and (max-width: ${size.mobile})": {
          height: "184px",
          width: "80%"
        }
      },

      Supersonic: {
        width: "40%",
        height: "250px",
        "@media screen and (max-width: ${size.mobile})": {
          height: "184px",
          width: "80%"
        }
      },

      Transsonic: {
        width: "30%",
        height: "200px",
        "@media screen and (max-width: ${size.mobile})": {
          height: "184px",
          width: "80%"
        }
      },
      Sonic: {
        width: "20%",
        height: "250px",
        "@media screen and (max-width: ${size.mobile})": {
          height: "184px",
          width: "80%"
        }
      }
    }
  })
);

export default SponsorComponent;
