import "../../theme/preloader.scss";
import React from "react";

class Preloader extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="loading">
          <p>loading</p>
          <span></span>
        </div>
      </div>
    );
  }
}
export default Preloader;
