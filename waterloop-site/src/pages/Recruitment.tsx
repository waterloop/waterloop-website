import React from "react";
import Hero from "components/Hero/General";
import PositionPosting from "../components/RecruitmentForm/PositionPosting";
import { TextWithImage } from "components/TextWithImage";
import { MyProps } from "components/TextWithImage";
import Text from "static/copy/Recruitment/Recruitment.json";
import Competition from "../static/img/landing/textwithimage/competition.png";
import "../theme/styles.scss";
import { Route, Switch, Router, BrowserRouter } from "react-router-dom";
const castData: MyProps[] = Text;
const imgData: string[] = [Competition];

const samplePostingsData = [
  {
    role: "Goose Designer",
    description: "",
    skills: "JavaScript, Goose Handling, Creativity",
    technicalQ: "How would you design a nest?",
    termList: ["F19", "W20", "S20", "F20", "W21"],
  },
  {
    role: "Goose Destroyer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skills: "JavaScript, Goose Handling, Resilience",
    technicalQ: "What is the most deadly feature of a goose?",
    termList: ["F19", "W20", "S20", "F20", "W21"],
  },
  {
    role: "Goose Whisperer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skills: "JavaScript, Goose Handling, Patience",
    technicalQ: "Demonstrate a time you translated geese language",
    termList: ["F19", "W20", "S20", "F20", "W21"],
  },
  {
    role: "Goose Babysitter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skills: "JavaScript, Goose Handling, Kindness",
    technicalQ: "How would you care for the geese in Waterloo?",
    termList: ["F19", "W20", "S20", "F20", "W21"],
  },
];

export class Recruitment extends React.Component<any, any> {
  render() {
    return (
      <>
        <Hero
          title="Join Us"
          description="Join our team."
          anchor="#recruitment"
        ></Hero>
        <div id={"#recruitment"}></div>
        <div className={"pageContainer"}>
          <TextWithImage
            data={castData}
            textPos={"alternate"}
            imgData={imgData}
          ></TextWithImage>
          <div className="break"></div>
          <h4>Current Postings</h4>
          <div className={"postings"}>
            <BrowserRouter>
              {samplePostingsData.length > 0 &&
                samplePostingsData.map((item: any) => {
                  return (
                    // <Switch>
                    //   <Route path="/recruitment/:">
                        <PositionPosting
                          key={item.role}
                          role={item.role}
                          description={item.description}
                          skills={item.skills}
                          technicalQ={item.technicalQ}
                          termList={item.termList}
                        ></PositionPosting>
                    //   </Route>
                    // </Switch>
                  );
                })}
            </BrowserRouter>
          </div>
          </div>
      </>
    );
  }
}

