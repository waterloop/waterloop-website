import React from 'react';
import styled from 'styled-components';

import MUIDialog from '@material-ui/core/Dialog';
import MUIDialogTitle from '@material-ui/core/DialogTitle';
import MUIDialogContent from '@material-ui/core/DialogContent';
import MUIIconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import UnstyledSponsorImageShadowed from './SponsorImageShadowed';

const Dialog = styled(MUIDialog)``;

const DialogTitle = styled(MUIDialogTitle).attrs({
  disableTypography: true,
})``;

const DialogContent = styled(MUIDialogContent)`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding-right: 16px;
`;

const SponsorImage = styled(UnstyledSponsorImageShadowed)`
  width: 80%;
  height: 50%;
  object-fit: cover;
  align-self: center;
`;

const SponsorTitle = styled.div`
  font: 500 36px IBM Plex Sans;
  font-style: italic;
  color: #010101;
  align-self: center;
  text-align: center;
  margin-top: 12px;
  @media screen and (max-width: 600px) {
    font-size: 26px;
  }
`;

const SponsorLink = styled.a`
  font: 24px IBM Plex Sans;
  font-style: italic;
  color: #838383;
  align-self: center;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const SponsorDetail = styled.div`
  margin-top: 32px;
  font: 24px IBM Plex Sans;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const IFrameHolder = styled.div`
  height: auto;
  width: auto;

  position: relative;
  padding-bottom: 56.25%;
  padding-top: 35px;
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const IconButton = styled(MUIIconButton)``;

interface Image {
  src?: string;
  alt?: string;
}

interface Props {
  open: boolean;
  onClose: (event: object, reason: string) => void;
  image?: Image;
  name?: string;
  link?: string;
  level?: 'Hypersonic' | 'Transonic' | 'Supersonic' | 'Sonic';
  dateJoined?: string;
  collaboration?: string;
  video?: string;
}

const SponsorModal: React.FC<Props> = ({
  open,
  onClose,
  image,
  name,
  link,
  level,
  dateJoined,
  collaboration,
  video,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <IconButton
          onClick={
            onClose as (
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => void
          }
        >
          <CloseIcon fontSize="large" color="action" />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <SponsorImage {...image} />
        <SponsorTitle>{name}</SponsorTitle>
        <SponsorLink href={link} target="_blank">{link}</SponsorLink>
        <SponsorDetail>
          <b>Sponsor Level: </b>
          {level}
        </SponsorDetail>
        <SponsorDetail>
          <b>Sponsor Since: </b>
          {dateJoined}
        </SponsorDetail>
        <SponsorDetail>
          <b>How have we collaborated: </b>
          <p>{collaboration}</p>
        </SponsorDetail>
        {video && (
          <IFrameHolder>
            <iframe
              width="560"
              height="315"
              src={video}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </IFrameHolder>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SponsorModal;
