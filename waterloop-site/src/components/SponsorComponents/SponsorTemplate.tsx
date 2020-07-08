import styled from "styled-components";



const size = {
    mobile: "420px",
    tabletM: "800px",
    tabletL: "1100px"
  };

interface SponsorTemplateInterface{
 variant?: string;   
}


const SponsorImgTemplate = styled.img`
    position: relative;
    margin-bottom: 20px;
    margin-left:10px;
    display: flex;
    align-items: center;
    background: #f4f4f4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    overflow: none;
    max-width:650px;
    min-width:240px;
`

export default SponsorImgTemplate;