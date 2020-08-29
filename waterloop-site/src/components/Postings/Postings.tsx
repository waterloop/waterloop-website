import React from "react";
import { Button } from "components";
import { samplePostingsData } from "../../static/consts/postings";

export default class Postings extends React.Component<any, any> {
  render() {
    return (
      <div className={"postings"}>
        {samplePostingsData.length > 0 &&
          samplePostingsData.map((item: any, index: number) => {
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
                  onClick={() => window.open(`/posting/${index + 1}`, "_self")}
                  variant={null}
                />
              </div>
            );
          })}
      </div>
    );
  }
}
