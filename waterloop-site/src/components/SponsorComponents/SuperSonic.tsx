import SponsorImgTemplate from "./SponsorTemplate";
import styled from "styled-components";
import UW_Engineering from "./TestingImage/UW_Engineering.png"
import React from "react";

const size = {
    mobile: "420px",
    tabletM: "800px",
    tabletL: "1100px"
};

  
const SuperSonicImg = styled(SponsorImgTemplate)`
width: 40%;
height:250px;
@media screen and (max-width:${size.mobile}){
    width:40%;
    height:80px;
}
`
interface MyProps {
    src:any;
}
class SuperSonic extends React.Component<MyProps>{
    render(){
        return(
            <SuperSonicImg src ={this.props.src}/>
        )
    }
}

export default SuperSonic;