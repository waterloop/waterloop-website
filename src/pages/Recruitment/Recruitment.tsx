import React from "react";
import styled from 'styled-components';
import Hero from "components/Hero/General";
import { TextWithImage } from "components/TextWithImage";
import { MyProps } from "components/TextWithImage";
import Text from "static/copy/Recruitment/Recruitment.json";
import JoinUs from "../../static/img/team/joinus.png";
import "../../theme/styles.scss";

import JobPostings from "components/Postings/Postings";
import { Button } from "components";
import usePostings from "hooks/postings";
const castData: MyProps[] = Text;
const imgData: string[] = [JoinUs];

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
`;

const SignUpButton = styled(Button)`
  width: 128px;
`;


const Recruitment: React.FC = () =>{
  const { postings } = usePostings();
  const date: Date = new Date();
  const currentMonth: number = date.getMonth() + 1; // NOTE: Recruitment is not consistent, this logic will not work, it would be better to have a controllable toggle on the CMS to open and close recruitment
  let currentCycle: string = "";
  // let nextCycle: string = "";
  const currentYear: number = date.getFullYear();
  // let nextYear: number = -1;
  if ([1,2,3].includes(currentMonth)) {
    currentCycle = "Winter";
    // nextCycle = "May";
  } else if ([4,5,6,7,8].includes(currentMonth)) {
    currentCycle = "Spring";
    // nextCycle = "September";
  } else {
    currentCycle = "Fall";
    // nextCycle = "January";
  }
  // nextYear = (currentCycle === "Fall") ? currentYear+1: currentYear;
  return (
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
        <VideoContainer>
          <iframe className="responsive-iframe" title="waterloop recruiting ad" src="https://drive.google.com/file/d/1E_-dDqZU5V1IR0R6A3Rmxq6SZwOIfOga/preview" allow="autoplay"></iframe>
        </VideoContainer>
        <div className="break"></div>
        {postings.length > 0 ? (
          <>
            <h2 className={"center-text"}>Current Postings</h2>
            <JobPostings />
            <br />
          </>
        ) : (
          <FlexContainer>
            <h3>Our new member recruitment for {currentCycle} {currentYear} is now open</h3>
            {/* <p>
              We will be recruiting again at the start of {nextCycle} {nextYear}. Sign up below to be notified when postings go live!
            </p>
            <p>
              Missed recruitment but still want to join our team? Reach out to us at <a href = "mailto:join@waterloop.ca">join@waterloop.ca</a>!
            </p> */}
            <p>
              Want to learn about linear induction motors, high power PCBS, or other technical and business topics? Fill out out our <a href = "https://forms.gle/jfcf6xypJukN9xjf7">Application Form</a> here.<br/>
            </p>
            <SignUpButton onClick={() => window.open('http://wloop.fly.dev/subscribe')} text="Sign up" backgroundColor="yellow" textColor="black"  />
          </FlexContainer>
        )}
      </div>
    </>
  );
};
export default Recruitment;
