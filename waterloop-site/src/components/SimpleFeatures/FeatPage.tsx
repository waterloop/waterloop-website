import React from "react";
import styled from "styled-components";
import SimpleFeatComp from "./SimpleFeatComp";
import * as data from "./exFeatsModel.json";

const Header = styled.h2`
    margin-left: 30px;
    font-size: 28px;
    font-weight: bold;
    font-style: italic;
    font-family: 'IBM Plex Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

class FeatPage extends React.Component {
    // Use this to assemble the feature sections with proper XML tags for the render area.
    assembleFeatSections(featInfo: Array<any>) {
        var features: JSX.Element[] = [];
        let assetDir = "/assets/"; // NOTE: I dunno how to properly reference the assets directory so this is the workaround + require statements.

        featInfo.forEach((value) => {
            features.push(
                // Define styled component here:
                <SimpleFeatComp imgSrc={assetDir + value.imgSrc} imgAlt={value.imgAlt} desc={value.desc}></SimpleFeatComp>
            )
        });

        return features;
    }
    // Render feature data passed from the model section 
    render() {
        return (
            <div>
                <Header>Features</Header>
                {this.assembleFeatSections(data.features)}
            </div>
        )
    }
}
export default FeatPage;