import React from "react";
import { Button } from "components/Button";
import "theme/styles.scss";

export type MyProps = {
  title?: string;
  text: string;
  link?: string;
  linkText?: string;
};

export class TextWithImage extends React.Component<{
  data: MyProps[];
  imgData: string[];
  textPos?: string;
}> {
  renderChildren = (data: MyProps[]) => {
    var isRightLeft = true; // Alternate between right-left and left-right layout.
    var key = -1;
    return data.map((entry: MyProps) => {
      isRightLeft = !isRightLeft;
      key += 1;

      // Determine if image should be displayed first or after text:
      let posClass = "";
      switch (this.props.textPos) {
        case "left":
          posClass = "left-right-variant";
          break;
        case "right":
          posClass = "right-left-variant";
          break;

        default:
          // The "alternate" case
          posClass = isRightLeft ? "right-left-variant" : "left-right-variant";
      }

      return (
        <div key={key} className={"Block-TextWithImage " + posClass}>
          <div className="TextBlock-TextWithImage">
            {entry.title !== undefined ? (
              <h2 className="Header-TextWithImage">{entry.title}</h2>
            ) : (
              <b></b>
            )}
            <p className="Text-TextWithImage">{entry.text}</p>
            <div className="ButtonBlock-TextWithImage">
              {/* Hide button if no link supplied. */}
              {this.renderButton(entry.link, entry.linkText)}
            </div>
          </div>
          <img
            className="Img-TextWithImage"
            src={this.props.imgData[key]}
            alt="waterloop"
          ></img>
        </div>
      );
    });
  };

  renderButton = (link: string | undefined, linkText: string | undefined) => {
    if (link !== undefined && linkText !== undefined) {
      return (
        <Button
          backgroundColor="yellow"
          textColor="black"
          text={linkText}
          onClick={() => window.open(link, "_self")}
          variant={null}
        ></Button>
      );
    }
  };

  render() {
    return <div>{this.renderChildren(this.props.data)}</div>;
  }
}
