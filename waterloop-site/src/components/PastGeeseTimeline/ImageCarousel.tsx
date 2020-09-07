import React from "react";
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";
import useGeeseImages from "./hooks/geese-images";
import "../../theme/styles.scss";

const Name = styled.div`
  text-align: center;
  color: #c4c4c4;
  padding-bottom: 10px;
  @media only screen and (min-width: 900px) {
    display: flex;
  }
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  width: 80%;

  color: #010101;

  @media only screen and (max-width: 425px) {
    width: 100%;
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
  justifyContent: center;
  alignItems: center;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  alignItems: center;
  flexDirection: column;
`;

const MobileContainer = styled.div`
  display: "flex",
  alignItems: "center",
  @media only screen and (max-width: 900px) {
    width: 100%;
    box-shadow: none;
  }
`;

const ImageCarousel: React.FC = () => {
  const { image, name, desc, cycleLeft, cycleRight } = useGeeseImages();

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
      <DescriptionWrapper>
        <Name>{name}</Name>
        <Description>
          <p>{desc}</p>
        </Description>
        <MobileContainer>
          <ArrowMobile className="material-icons" onClick={cycleLeft}>
            keyboard_arrow_left
          </ArrowMobile>
          <ArrowMobile className="material-icons" onClick={cycleRight}>
            keyboard_arrow_right
          </ArrowMobile>
        </MobileContainer>
      </DescriptionWrapper>
    </div>
  );
};

export default ImageCarousel;
