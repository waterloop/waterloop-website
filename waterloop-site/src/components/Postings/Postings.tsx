import React from "react";
import { Button } from "components";
import { samplePostingsData } from "../../static/consts/postings";

class Subteam extends React.Component<any, any> {
  render() {
    return (
      <div className={"postings"}>
        <h3>
          <strong>{this.props.team}</strong>
        </h3>
        {this.props.postings.length > 0 &&
          this.props.postings.map((item: any, index: number) => {
            if (item.subteam == this.props.team)
              return (
                <div className={"posting"}>
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
                  <Button
                    backgroundColor="yellow"
                    textColor="black"
                    text={"APPLY"}
                    onClick={() =>
                      window.open(`/posting/${index + 1}`, "_self")
                    }
                    variant={null}
                  />
                </div>
              );
          })}
      </div>
    );
  }
}

export default class Postings extends React.Component<any, any> {
  render() {
    const TEAMS = ["Software", "Mechanical", "Electrical", "Business", "LIM", "Team Hub", "Infrastructure", "Other"];
    return (
      <div>
        {TEAMS.map((team: any, index: number) => {
          return (
            <Subteam postings={samplePostingsData} team={team} key={index} />
          );
        })}
      </div>
    );
  }
}
