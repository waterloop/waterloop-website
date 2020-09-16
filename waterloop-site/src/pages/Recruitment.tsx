import React from "react";
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
        <h2 className={"center-text"}>We are not Currently Recruiting. Please Check back at the start of the winter 2021 term.</h2>
      )}
    </div>
  </>
);

export default Recruitment;
