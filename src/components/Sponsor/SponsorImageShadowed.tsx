import React from 'react'
import styled from 'styled-components';

const Image = styled.img`
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  border-radius: 15px;
`;

interface Props {
  src?: string;
  alt?: string;
  className?: string;
}

const SponsorImageShadowed: React.FC<Props> = ({ className, src, alt }) => {
  return (
    <Image className={className} src={src} alt={alt}/>
  )
}

export default SponsorImageShadowed;
