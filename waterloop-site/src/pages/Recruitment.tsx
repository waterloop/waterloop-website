import React from "react";
import Hero from "components/Hero/General";
import PositionPosting from "../components/RecruitmentForm/PositionPosting";
import { TextWithImage } from "components/TextWithImage";
import { MyProps } from "components/TextWithImage";
import Text from "static/copy/Recruitment/Recruitment.json";
import Competition from "../static/img/landing/textwithimage/competition.png";
import "../theme/styles.scss";
import { Route, Switch, Router, BrowserRouter, Link } from "react-router-dom";
import JobPostingPage from "components/RecruitmentForm/JobPostingPage";
const castData: MyProps[] = Text;
const imgData: string[] = [Competition];

export const samplePostingsData = [
  {
    role: "Goose Designer",
    deadline: "September 26, 2020",
    description: "Laboris incididunt officia culpa consequat dolor adipisicing ullamco ipsum ex. Sit ullamco anim fugiat sint velit. Sit tempor magna adipisicing aliqua anim veniam commodo. Nisi do cupidatat ut laborum commodo eu sunt ut sint. In non irure aliquip in culpa officia ex voluptate commodo sit nostrud cupidatat. Magna pariatur qui deserunt commodo. Ad aliqua proident do duis nisi est labore amet reprehenderit amet consectetur est nulla.",
    tasks: ["In magna magna eu laborum aliqua labore non in adipisicing commodo anim.", "Quis laborum duis aliqua labore quis amet nisi."],
    requirements: ["Strong grasp of javascript.", "Quis laborum duis aliqua labore quis amet nisi."],
    interest: ["Front End Web Development", "Quis laborum duis aliqua labore quis amet nisi."],
    termList: ["F19", "W20", "S20", "F20", "W21"],
  },
  {
    role: "Goose Engineer",
    deadline: "September 26, 2020",
    description: "Laboris incididunt officia culpa consequat dolor adipisicing ullamco ipsum ex. Sit ullamco anim fugiat sint velit. Sit tempor magna adipisicing aliqua anim veniam commodo. Nisi do cupidatat ut laborum commodo eu sunt ut sint. In non irure aliquip in culpa officia ex voluptate commodo sit nostrud cupidatat. Magna pariatur qui deserunt commodo. Ad aliqua proident do duis nisi est labore amet reprehenderit amet consectetur est nulla.",
    tasks: ["In magna magna eu laborum aliqua labore non in adipisicing commodo anim.", "Quis laborum duis aliqua labore quis amet nisi."],
    requirements: ["Strong grasp of javascript.", "Quis laborum duis aliqua labore quis amet nisi."],
    interest: ["Front End Web Development", "Quis laborum duis aliqua labore quis amet nisi."],
    termList: ["F19", "W20", "S20", "F20", "W21"],
  }
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

        <div id={"#recruitment"}>
        </div>
        <div className={"pageContainer"}>
          <TextWithImage
            data={castData}
            textPos={"alternate"}
            imgData={imgData}
          ></TextWithImage>
          <div className="break"></div>
          <h4>Current Postings</h4>
          <div className={"postings"}>
            {samplePostingsData.length > 0 &&
              samplePostingsData.map((item: any, index:number) => {
                return (
                  <BrowserRouter>
                  <Link to={`/recruitment/${index + 1}`}  >
                <h4>{item.role}</h4>
                  {/* <PositionPosting
                      key={item.role}
                      role={item.role}
                      description={item.description}
                      skills={item.skills}
                      technicalQ={item.technicalQ}
                      termList={item.termList}
                    /> */}
                  </Link>
                    <Switch>
                        <Route path="/recruitment/:id" >
                          <JobPostingPage></JobPostingPage>
                      </Route>
                    </Switch>
                  </BrowserRouter>

                );
              })}
          </div>
        </div>
      </>
    );
  }
}

