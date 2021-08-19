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

const SignUpButton = styled(Button)`
  width: 128px;
`;


const Recruitment: React.FC = () =>{
  const { postings } = usePostings();
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
        {postings.length > 0 ? (
          <>
            <h2 className={"center-text"}>Current Postings</h2>
            <JobPostings />
          </>
        ) : (
          <FlexContainer>
            <h3>Our new member recruitment for Spring 2021 has closed. </h3>
            <p>
              We will be recruiting again at the start of September 2021. Sign up below to be notified when postings go live!
            </p>
            <p>
              Do you have prior expertise in linear induction motors, high power PCB design, or other relevant technical topics? We'd love to learn from you as an advisor; reach out to us at <a href = "mailto: contact@waterloop.ca">contact@waterloop.ca</a> if you're interested!
            </p>
            <SignUpButton onClick={() => window.open('http://wloop.ca/subscribe')} text="Sign up" backgroundColor="yellow" textColor="black"  />
          </FlexContainer>
        )}
      </div>
    </>
  );
};
export default Recruitment;
