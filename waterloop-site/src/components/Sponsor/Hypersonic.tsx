import styled from "styled-components";
import * as React from "react";

type ImageProp = {
  src: string;
  fit?: string;
}

interface SponsorGridProps {
  sponsorImages: ImageProp[];
  tier: string;
  alt?: string;
}

const HypersonicList: React.FC<SponsorGridProps> = (props) => (
  <Container>
    <h2>{props.tier}</h2>
    <SponsorFlexbox>
      {props.sponsorImages.map((image, i) => (
        <SponsorItem index={i}>
          <SponsorImageContainer>
            <SponsorImage fit={image.fit ?? 'cover'} src={image.src} alt={props.alt ?? "sponsor"} />
          </SponsorImageContainer>
        </SponsorItem>
      ))}
    </SponsorFlexbox>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  width: 100%;
`;

const SponsorFlexbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  flex-wrap: wrap;
  margin-top: 60px;
`;

const SponsorItem = styled.div<{
  index: number;
}>`
  flex: 0 50%;
  display: flex;
  justify-content: ${({ index }): string =>
    index % 2 ? "flex-end" : "flex-start"};
  margin: 33px 0;
`;

const SponsorImageContainer = styled.div`
  width: 495px;
  height: 184px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SponsorImage = styled.img<{
  fit: string;
}>`
  width: 100%;
  height: 100%;
  object-fit: ${({ fit }): string => fit};
  border-radius: 15px;
`;

export default HypersonicList;
