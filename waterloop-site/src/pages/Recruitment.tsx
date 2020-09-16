import React from "react";
import styled from 'styled-components';
import Hero from "components/Hero/General";
import { TextWithImage } from "components/TextWithImage";
import { MyProps } from "components/TextWithImage";
import Text from "static/copy/Recruitment/Recruitment.json";
import JoinUs from "../static/img/team/joinus.png";
import "../theme/styles.scss";

import JobPostings from "components/Postings/Postings";
const castData: MyProps[] = Text;
const imgData: string[] = [JoinUs];

const currentlyRecruiting = false;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Recruitment: React.FC = () => (
  <>
    <Hero
      title="JOIN US"
      description="Join our team."
      anchor="#recruitment"
    />
    <div id={"#recruitment"}></div>
    <div className={"pageContainer"}>
      <TextWithImage
        data={castData}
        textPos={"alternate"}
        imgData={imgData}
      ></TextWithImage>
      <div className="break"></div>
      {currentlyRecruiting ? (
        <>
          <h2 className={"center-text"}>Current Postings</h2>
          <JobPostings />
        </>
      ) : (
        <FlexContainer>
          <h3>Our winter member recruitment is now <b>closed</b> for the Fall term.</h3>
          <p>
            Thanks for visiting and be sure to check back in the Winter! :)Do you have prior expertise in linear induction motors, high power PCB design, or other relevant technical topics? We'd love to learn from you as an advisor; reach out to us at <a href = "mailto: contact@waterloop.ca">contact@waterloop.ca</a> if you're interested!
          </p>
        </FlexContainer>
      )}
    </div>
  </>
);

export default Recruitment;
