// Core modules:
import React from "react";
import styled from "styled-components";
import "../../theme/styling/SimpleFeatComp.css";    // For styling

export type FeatProps = { imgSrc: string, imgAlt: string, /*header: string,*/ desc: string }    // Type definition for component.

/* NOTE: See if you can use PureComponent instead.
 You should go for React.PureComponent when you can satisfy any of the below conditions.

    State/Props should be an immutable object
    State/Props should not have a hierarchy
    You should call forceUpdate when data changes
 */

// Custom styled image component.
const FeatImage = styled.img`
    display: block;
    background: url(${props => props.src} || "nonexistent-link") no-repeat;    
    object-fit: cover;  /*Centers image and crops instead of scales aspect ratio.*/

    /*200 IQ bug fix (the first image doesn't load in correct size if only using width ;) */
    min-width: 10em;
    max-width: 10em;

    height: 10em;
    margin-right: 20px;
`;

const FeatPara = styled.p`
    margin-top: 0px;
    font-size: 18px;
    
    font-family: 'IBM Plex Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

class SimpleFeatComp extends React.Component<FeatProps> {

    render() {
        return (
            <div className="featComp">
                <FeatImage src={this.props.imgSrc} alt={this.props.imgAlt}></FeatImage>
                <FeatPara>{this.props.desc}</FeatPara>
            </div>
        );
    }
}

// Export so that other code can use this component:
export default SimpleFeatComp; // default is used so that we don't have to immediately define the class again.