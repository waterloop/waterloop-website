import React from "react";
import Hero from "components/Hero/General";
import PositionPosting from "../components/RecruitmentForm/PositionPosting";
import { TextWithImage } from "components/TextWithImage";
import { MyProps } from "components/TextWithImage";
import Text from "static/copy/Recruitment/Recruitment.json";
import JoinUs from "../static/img/team/joinus.png";
import "../theme/styles.scss";
import { Route, Switch, Router, BrowserRouter, Link, NavLink } from "react-router-dom";
import JobPostingPage from "components/RecruitmentForm/JobPostingPage";
import { samplePostingsData } from "../static/consts/postings";
const castData: MyProps[] = Text;
const imgData: string[] = [JoinUs];

export class Recruitment extends React.Component<any, any> {
  render() {
    return (
      <>
        <Hero
          title="JOIN US"
          description="Join our team."
          anchor="#recruitment"
        ></Hero>
        <div id={"#recruitment"}>
        </div>
        <div className={"pageContainer"}>
          <TextWithImage
            data={castData}
            textPos={"alternate"}
            imgData={imgData}
          ></TextWithImage>
          <div className="break"></div>
          <h2>Current Postings</h2>
          <div className={"postings"}>
            {samplePostingsData.length > 0 &&
              samplePostingsData.map((item: any, index: number) => {
                return (
                  <a href={`/posting/${index + 1}`} style={{ textDecoration: "none", color: "black", padding: "30px 0" }}>
                    <h3>{item.role}</h3>
                    <div className="break"></div>
                  </a>

                );
              })}
          </div>
        </div>
      </>
    );
  }
}

