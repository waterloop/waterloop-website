import React from "react";
import styled from "styled-components";
import { SimpleFeatComp } from "../../components/SimpleFeatures/index";
import * as data from "../../static/copy/exFeatsModel.json";
import "../../theme/styles.scss";

class FeatPage extends React.Component {
  // Use this to assemble the feature sections with proper XML tags for the render area.
  assembleFeatSections(featInfo: Array<any>) {
    var features: JSX.Element[] = [];
    let assetDir = "static/img/goose/"; // NOTE: I dunno how to properly reference the assets directory so this is the workaround + require statements.

    featInfo.forEach((value) => {
      features.push(
        // Define styled component here:
        <SimpleFeatComp
          imgSrc={assetDir + value.imgSrc}
          imgAlt={value.imgAlt}
          desc={value.desc}
        ></SimpleFeatComp>
      );
    });

    return features;
  }
  // Render feature data passed from the model section
  render() {
    return (
      <div>
        <h2 className="Header-FeaturedComponent">Features</h2>
        {this.assembleFeatSections(data.features)}
      </div>
    );
  }
}
export default FeatPage;
