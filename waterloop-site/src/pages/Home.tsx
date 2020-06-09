import React from "react";
import Hero from "components/Hero/Landing"
import styled from "styled-components";
import { TextWithImage } from "components/TextWithImage";
import TextWithImageData from "../static/copy/TextWithImage.json"
import { Sponsors } from "components/Sponsors";

var title = "";
var text = "";
var image = "";

TextWithImageData.map((detail) => {
    title = detail.title;
    text = detail.text;
    image = detail.image;
})

class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero description="A faster look on the future."></Hero>
                <TextWithImage
                    title={title}
                    text={text}
                    image={image}
                />
            </div>
        );
    }
}

export default Home;
