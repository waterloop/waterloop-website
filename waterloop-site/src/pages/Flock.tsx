import React from "react";
import Hero from "components/Hero/General"
import SimpleFeature from "components/SimpleFeatures/SimpleFeature"
import TextWithImageData from "../static/copy/TextWithImage.json"

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
            </div>
        );
    }
}

export default Flock;
