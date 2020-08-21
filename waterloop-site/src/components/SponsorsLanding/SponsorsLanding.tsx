import React from "react";

import { Button } from "components/Button";

export type ImgJSON = { imgSrc: string; imgAlt: string };

class SponsorsLanding extends React.Component<{ data: ImgJSON[] }> {
  renderImages = (data: ImgJSON[]) => {
    return data.map((entry) => {
      return (
        <div key={entry.imgSrc} className="Img-Box-Sponsors">
          <img className="Img-Sponsors" src={entry.imgSrc} alt={entry.imgAlt} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="Block-Sponsors">
        <h2 className="Header-Sponsors">Our Sponsors</h2>
        <div className="SponsorsContainer">
          {this.renderImages(this.props.data)}
        </div>
        <div className="Button-Sponsors">
          <Button
            backgroundColor="yellow"
            textColor="black"
            text="SEE MORE OF OUR SPONSORS"
            onClick={() => window.open("sponsors", "_self")}
            variant={null}
          ></Button>
        </div>
      </div>
    );
  }
}

export default SponsorsLanding;
