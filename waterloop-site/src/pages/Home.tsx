import React from "react";
import Hero from "components/Hero/Landing"
import { TextWithImage } from "components/TextWithImage";
import { MyProps } from "components/TextWithImage";
import data from 'static/copy/TextWithImage.json';

const castData: MyProps[] = data;

class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero description="A faster look on the future."></Hero>
                <TextWithImage data={castData} textPos={"alternate"} />
            </div>
        );
    }
}

export default Home;
