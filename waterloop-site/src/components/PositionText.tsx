import React from "react";
import PositionComponent from "./PositionComponent"


class PositionText extends React.Component {
  render() {
    return (
      <div>
          <PositionComponent
          position = "Papa Goose is the Supreme Leader"
          ></PositionComponent>
      </div>
    );
  }
}

export default PositionText;
