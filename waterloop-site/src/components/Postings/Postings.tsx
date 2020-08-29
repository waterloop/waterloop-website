import React from "react";
import PositionPosting from "../RecruitmentForm/PositionPosting";
import JobPostingPage from "components/RecruitmentForm/JobPostingPage";
import JobPostings from "components/Postings/Postings";
import Text from "static/copy/Recruitment/Recruitment.json";
import { samplePostingsData } from "../../static/consts/postings";
import {
  Route,
  Switch,
  Router,
  BrowserRouter,
  Link,
  NavLink,
} from "react-router-dom";

export default class Postings extends React.Component<any, any> {
  render() {
    return (
      <div className={"postings"}>
        {samplePostingsData.length > 0 &&
          samplePostingsData.map((item: any, index: number) => {
            return (
              <div className={"postings"}>
                <h3>
                  <a
                    href={`/posting/${index + 1}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    {item.role}
                  </a>
                </h3>
              </div>
            );
          })}
      </div>
    );
  }
}
