import React from "react";
import { SimpleFeatComp } from "../../components/SimpleFeatures/index";
import * as data from "../../static/copy/Flock/exFeatsModel.json";
import "../../theme/styles.scss";

// Import images:
// TODO: change image name once more images available.
import Feat1 from "../../static/img/goose/LIM.png";
import Feat2 from "../../static/img/goose/frame.png";
import Feat3 from "../../static/img/goose/guidance.png";
import Feat4 from "../../static/img/goose/battery.png";
import Feat5 from "../../static/img/goose/embedded.png";

const imgs: string[] = [Feat1, Feat2, Feat3, Feat4, Feat5];

interface Feature {
  imgAlt: string;
  header: string;
  desc: string;
}

const assembleFeatSections = (featInfo: Feature[]): React.ReactElement[] => featInfo.map((value, key) =>
  <SimpleFeatComp
    key={key}
    imgSrc={imgs[key]}
    imgAlt={value.imgAlt}
    header={value.header}
    desc={value.desc}
  />
);

const FeatPage: React.FC = () => (
  <div>
    {assembleFeatSections(data.features)}
  </div>
);

export default FeatPage;
