import SponsorImgTemplate from "./SponsorTemplate";
import styled from "styled-components";
import React from "react";

const size = {
    mobile: "420px",
    tabletM: "800px",
    tabletL: "1100px"
};

  
const SonicImg = styled(SponsorImgTemplate)`

width: 20%;
height:250px;
@media screen and (max-width:${size.mobile}){
    width:20%;
    height:30px;
}
`
interface MyProps  {
    src: any
}

class Sonic extends React.Component<MyProps>{
    render(){
        return(
            <SonicImg src ={this.props.src}/>
        )
    }
}

export default Sonic;