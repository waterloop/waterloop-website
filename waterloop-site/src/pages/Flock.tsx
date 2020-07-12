import React from "react";
import Hero from "components/Hero/General"
import SimpleFeature from "components/SimpleFeatures/SimpleFeature"
import TextWithImageData from "../static/copy/TextWithImage.json"
import PastGeeseTimeline from "components/PastGeeseTimeline/PastGeeseTimeline"

var image = "";

TextWithImageData.forEach((detail) => {
    image = detail.image;
})

class Flock extends React.Component {
    render() {
        return (
            <div>
                <Hero title="The Flock" description="Learn about our geese."></Hero>
                <SimpleFeature imgSrc={image} imgAlt="test" desc="test"></SimpleFeature>
                <SimpleFeature imgSrc={image} imgAlt="test" desc="test"></SimpleFeature>
                <PastGeeseTimeline className=""></PastGeeseTimeline>
            </div>
        );
    }
}

export default Flock;
