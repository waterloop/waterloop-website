import React from "react";
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";
import useGeeseImages from "./hooks/geese-images";
import "../../theme/styles.scss";

const Name = styled.div`
  text-align: center;
  font-size: 24px;
  color: #c4c4c4;
  margin: 10px 0;
  // @media only screen and (min-width: 900px) {
  //   display: flex;
  // }
`;  

const Description = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  max-width: 1250px;
  min-height: 100px;
  color: #010101;

  @media only screen and (max-width: 425px) {
    width: 100%;
    height:100%;
    padding-bottom: 20px;
  }
`;

const Arrow = styled.i`
  font-size: 48px;
  cursor: pointer;
  display: none;
  @media only screen and (min-width: 900px) {
    display: flex;
  }
`;

const ArrowMobile = styled.i`
  font-size: 48px;
  cursor: pointer;
  display: flex;
  @media only screen and (min-width: 900px) {
    display: none;
  }
`;

const Image = styled.img`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 80%;
  @media only screen and (max-width: 900px) {
    width: 100%;
    box-shadow: none;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 900px) {
    width: 100%;
    box-shadow: none;
    flex-direction: row;
  }
`;


const Timeline = styled.div`
  align-items: center;
  width: 100%;
  margin-top: 48px;
`;

const Increments = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 0;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  background-color: black;
  height: 1px;
`;

const IncrementText = styled.button`
  font-size: 20px;
  margin: 0;
  border: none;
  background-color: white;
  :hover {
    cursor: pointer;
  }
`

const IncrementTextChosen = styled.button`
  font-size: 20px;
  margin: 0;
  border: none;
  background-color: white;
  :hover {
    cursor: pointer;
  }
    font-weight: 800;
    color: #fed138; 
`


const ImageCarousel: React.FC = () => {
  const { image, name, desc, imgs, currentGoose, cycleLeft, cycleRight, selectGoose } = useGeeseImages();

  const swipeHandlers = useSwipeable({
    onSwipedLeft: cycleLeft,
    onSwipedRight: cycleRight,
  });

  return (
    <div>
      <Container>
        <Arrow className="material-icons" onClick={cycleLeft}>
          keyboard_arrow_left
        </Arrow>
        <Image {...swipeHandlers} src={image} alt="Goose Pick" />
        <Arrow className="material-icons" onClick={cycleRight}>
          keyboard_arrow_right
        </Arrow>
      </Container>
      <MobileContainer>
          <ArrowMobile className="material-icons" onClick={cycleLeft}>
            keyboard_arrow_left
          </ArrowMobile>
          <ArrowMobile className="material-icons" onClick={cycleRight}>
            keyboard_arrow_right
          </ArrowMobile>
        </MobileContainer>
      <DescriptionWrapper>
        <Name>{name}</Name>
        <Description>
          <p>{desc}</p>
        </Description>
      </DescriptionWrapper>
      <Timeline>
      <HorizontalLine />
        <Increments>
          {imgs.map((goose, i:number) => { 
            if (i == currentGoose) {
              return <IncrementTextChosen onClick={selectGoose(i)}>{goose.name.replace('Goose ','')}</IncrementTextChosen>;
            } else {
              return <IncrementText onClick={selectGoose(i)}>{goose.name.replace('Goose ','')}</IncrementText>;
            }
          })} 
        </Increments>
      </Timeline>
    </div>
  );
};

export default ImageCarousel;
