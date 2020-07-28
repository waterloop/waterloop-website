import React from "react";
import Hero from "components/Hero/Landing"
import { TextWithImage } from "components/TextWithImage";
import { MyProps } from "components/TextWithImage";
import data from 'static/copy/TextWithImage.json';

// Because the images are stored in static/img, we must import each of them individually and then pass them as an array in the exact order of the JSON entries:
import Sunset from '../static/img/landing/textwithimage/download.jpg';
import Clouds from '../static/img/landing/textwithimage/image2.jpg';
import Meme from '../static/img/landing/textwithimage/Meme6.png';
import Geese from '../static/img/landing/textwithimage/joinus.jpg';

const castData: MyProps[] = data;
const imgData: string[] = [Sunset, Clouds, Meme, Geese];

class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero description="A faster look on the future."></Hero>
                <TextWithImage data={castData} textPos={"alternate"} imgData={imgData} />
            </div>
        );
    }
}

export default Home;
