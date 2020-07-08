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
    width:80%;
    height:250px;
}
`

class SuperSonic extends React.Component{
    render(){
        return(
            <SuperSonicImg src ={UW_Engineering}/>
        )
    }
}

export default SuperSonic;