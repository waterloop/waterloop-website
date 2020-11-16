import React from "react";
import styled from 'styled-components';
import UnstyledShadowImage from './SponsorImageShadowed';

const ShadowImage = styled(UnstyledShadowImage)`
  width: 100%;
  height: auto;
`;

const Container = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(105%);
    cursor: pointer;

  }
`;

interface Props {
  tier?: string;
  src?: string;
  alt?: string;
  onClick?: () => void;
};

const Sponsor: React.FC<Props> = (props) => (
  <Container onClick={props.onClick}>
    <ShadowImage src={props.src} alt={props.alt} />
  </Container >
);

export default Sponsor;
