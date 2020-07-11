import SponsorImgTemplate from "./SponsorTemplate";
import styled from "styled-components";
import UW_Engineering from "./TestingImage/UW_Engineering.png"
import React from "react";

const size = {
    mobile: "420px",
    tabletM: "800px",
    tabletL: "1100px"
};

  
const TransSonicImg = styled(SponsorImgTemplate)`

width: 30%;
height:250px;
@media screen and (max-width:${size.mobile}){
    width:30%;
    height:50px;
}
`
interface MyProps {
    src: any;
}

class TransSonic extends React.Component<MyProps>{
    render(){
        return(
            <TransSonicImg src ={this.props.src}/>
        )
    }
}

export default TransSonic;