import React from "react";
import SubTitleComponent from "./SubTitleComponent"


class SubTitleText extends React.Component {
  render() {
    return (
      <div>
          <SubTitleComponent
          title = "A Potentially Very Long Name"
          ></SubTitleComponent>
      </div>
    );
  }
}

export default SubTitleText;
