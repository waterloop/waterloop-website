import React from "react";
import "theme/styles.scss";

export type Props = {
  title: string;
  body: {
    heading1: string;
    text1: string;
    heading2: string;
    text2: string;
    heading3: string;
    text3: string;
  };
  link?: string;
  linkText?: string;
};
export class ColumnBlock extends React.Component<{
  data: Props[];
  imgData: string[];
}> {
  render() {
    return (
      <>
        <div className="banner">
          <h2 className="white-text">{this.props.data[0].title}</h2>
        </div>
        <div className="pageContainer">
          <div className="col-block">
            <div>
              <h3>{this.props.data[0].body.heading1}</h3>
              <p> {this.props.data[0].body.text1}</p>
            </div>
            <div>
              <h3>{this.props.data[0].body.heading2}</h3>
              <p> {this.props.data[0].body.text2}</p>
            </div>
            <div>
              <h3>{this.props.data[0].body.heading3}</h3>
              <p> {this.props.data[0].body.text3}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
