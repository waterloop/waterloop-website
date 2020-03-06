import React from "react";
import TitleComponent from "./TitleComponent"


class TitleText extends React.Component {
  render() {
    return (
      <div>
          <TitleComponent
          title = "A Potentially Very Long Name"
          ></TitleComponent>
      </div>
    );
  }
}

export default TitleText;
