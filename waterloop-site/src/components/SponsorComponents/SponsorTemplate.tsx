import styled from "styled-components";



const size = {
  mobile: "420px",
  tabletM: "800px",
  tabletL: "1100px"
};


const SponsorImgTemplate = styled.img`
    position: relative;
    margin-bottom: 20px;
    margin-left:10px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    overflow: none;

@media screen (min-width:${size.mobile}){
  min-width:240px;
  max-width:650px;
 }
`

export default SponsorImgTemplate;