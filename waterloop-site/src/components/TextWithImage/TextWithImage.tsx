import React from "react";
import { Button } from "components/Button";
import "../../theme/global.css";

type MyProps = { title: string; text: string; image: string };

export class TextWithImage extends React.Component<MyProps> {
  render() {
    return (
      <div className="Block-TextWithImage">
        <div className="TextBlock-TextWithImage">
          <h2 className="Header-TextWithImage">{this.props.title}</h2>
          <p className="Text-TextWithImage">{this.props.text}</p>
          <div className="ButtonBlock-TextWithImage">
            <Button
              backgroundColor="yellow"
              textColor="black"
              text="LEARN MORE"
              onClick={() => window.open("the-flock")}
              variant={null}
            ></Button>
          </div>
        </div>
        <img
          className="Img-TextWithImage"
          src={this.props.image}
          alt="waterloop"
        ></img>
      </div>
    );
  }
}
