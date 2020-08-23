import React from "react";
import styled from "styled-components";
import { SimpleFeatComp } from "../../components/SimpleFeatures/index";
import * as data from "../../static/copy/Flock/exFeatsModel.json";
import "../../theme/styles.scss";

// Import images:
// TODO: change image name once more images available.
import Feat1 from "../../static/img/goose/feat1.png";
import Feat2 from "../../static/img/goose/feat1.png";
import Feat3 from "../../static/img/goose/feat1.png";
import Feat4 from "../../static/img/goose/feat1.png";
import Feat5 from "../../static/img/goose/feat1.png";

const imgs: string[] = [Feat1, Feat2, Feat3, Feat4, Feat5];

class FeatPage extends React.Component {
  // Use this to assemble the feature sections with proper XML tags for the render area.
  assembleFeatSections(featInfo: Array<any>) {
    var features: JSX.Element[] = [];
    // let assetDir = "static/img/goose/"; // NOTE: I dunno how to properly reference the assets directory so this is the workaround + require statements.
    
    var key = 0;
    featInfo.forEach((value) => {
      features.push(
        // Define styled component here:
        <SimpleFeatComp
          key={key}
          imgSrc={imgs[key]}
          imgAlt={value.imgAlt}
          header={value.header}
          desc={value.desc}
        ></SimpleFeatComp>
      );
      key += 1;
    });

    return features;
  }
  // Render feature data passed from the model section
  render() {
    return (
      <div>
        {this.assembleFeatSections(data.features)}
      </div>
    );
  }
}
export default FeatPage;
