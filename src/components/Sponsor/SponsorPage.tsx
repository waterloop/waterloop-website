import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import SponsorComponent from './Sponsor';
import SponsorModal from './SponsorModal';
import useSponsors from 'hooks/sponsors';
import { Sponsor } from 'sponsors';
import { timestampMillisecToTermSeasonYear } from 'utils/sponsors/sponsor-utils';

const TransonicSponsor = styled(SponsorComponent)`
  img {
    height: calc(min(15vh, 84px));
  }
`;

// interface ISponsor {
//   image: {
//     src: string;
//     alt: string;
//   };
//   name: string;
//   link: string;
//   level: 'Hypersonic' | 'Transonic' | 'Supersonic' | 'Sonic';
//   dateJoined: string;
//   collaboration: string;
//   video?: string;
// }
//#region
// /* Move this to the CMS Eventually */
// const sponsors: ISponsor[] = [
//   {
//   // {
//   //   name: 'Dassult Systems',
//   //   collaboration: 'Thank you for providing our team with 90 Solidworks 2020/2021 licenses. The mechanical team relies heavily on Solidworks (and Solidworks PDM) to design and simulate each and every component in the pod. This also provides an opportunity for our members to gain highly industry-relevant experience in CAD, FEA, and GD&T.',
//   // },
//   // {
//   //   name: 'Metal Pros',
//   //   collaboration: 'MetalPros provided us with your generous discount. We used this to purchase our aluminum tubing for our current pod’s frame.',
//   //   dateJoined: 'Fall 2020',
//   //   image: ,
//   //   level: 'Supporter' // TODO Add in supporter tier
//   // },
// ];
//#endregion


const SponsorList: React.FC = () => {
  const { sponsors, sponsorTiers } = useSponsors();
  const [sponsor, setSponsor] = React.useState<Sponsor>();
  const [modalOpen, setModalOpen] = React.useState(false);
  const handelSponsorClick = React.useCallback(
    (s: Sponsor) => {
      setModalOpen(true);
      setSponsor(s);
    },
    [setModalOpen, setSponsor]
  );
  return (
    <div className="SponsorPage">
      <h2>Hypersonic</h2>
      <Grid
        className="TierWrapper"
        spacing={4}
        container
        alignItems="center"
        justifyContent="center"
      >
        {sponsors
          .filter(sponsor => sponsorTiers.find(({id}) => id === sponsor.typeId)?.type  === 'Hypersonic')
          .map(sponsor => (
            <Grid key={sponsor.name} container item md={6} justifyContent="center">
              <SponsorComponent
                alt="SponsorImage"
                src={sponsor.logoDir}
                tier={'Hypersonic'}
                onClick={() => handelSponsorClick(sponsor)}
              />
            </Grid>
          ))}
      </Grid>
      <h2>Supersonic</h2>
      <Grid
        className="TierWrapper"
        spacing={4}
        container
        alignItems="center"
        justifyContent="center"
      >
        {sponsors
          .filter(sponsor => sponsorTiers.find(({id}) => id === sponsor.typeId)?.type === 'Supersonic')
          .map(sponsor => (
            <Grid key={sponsor.name} container item md={4} xs={6} justifyContent="center">
              <SponsorComponent
                alt="SponsorImage"
                src={sponsor.logoDir}
                tier="Supersonic"
                onClick={() => handelSponsorClick(sponsor)}
              />
            </Grid>
          ))}
      </Grid>
      <h2>Transonic</h2>
      <Grid
        className="TierWrapper"
        spacing={4}
        container
        alignItems="center"
        justifyContent="center"
      >
        {sponsors
          .filter(sponsor => sponsorTiers.find(({id}) => id === sponsor.typeId)?.type === 'Transonic')
          .map(sponsor => (
            <Grid key={sponsor.name} container item md={3} xs={4} justifyContent="center">
              <TransonicSponsor
                alt="SponsorImage"
                src={sponsor.logoDir}
                tier="Transonic"
                onClick={() => handelSponsorClick(sponsor)}
              />
            </Grid>
          ))}
      </Grid>
      <h2>Sonic</h2>
      <Grid
        className="TierWrapper"
        spacing={4}
        container
        alignItems="center"
        justifyContent="center"
      >
        {sponsors
          .filter(sponsor => sponsorTiers.find(({id}) => id === sponsor.typeId)?.type === 'Sonic')
          .map(sponsor => (
            <Grid key={sponsor.name} container item md={2} xs={4} justifyContent="center">
              <SponsorComponent
                alt="SponsorImage"
                src={sponsor.logoDir}
                tier="Sonic"
                onClick={() => handelSponsorClick(sponsor)}
              />
            </Grid>
          ))}
      </Grid>
      <h2>Supporters</h2>
      <Grid
        className="TierWrapper"
        spacing={4}
        container
        alignItems="center"
        justifyContent="center"
      >
        {sponsors
          .filter(sponsor => sponsorTiers.find(({id}) => id === sponsor.typeId)?.type  === 'Supporter')
          .map((supporter, i) => (
          <Grid key={i} container item md={3} xs={3} justifyContent="center">
            <h3>{supporter.name}</h3>
          </Grid>
        ))}
      </Grid>
      <h2>Old Sponsors</h2>
      <Grid
        className="TierWrapper"
        spacing={4}
        container
        alignItems="center"
        justifyContent="center"
      >
        {sponsors
          .filter(sponsor => sponsorTiers.find(({id}) => id === sponsor.typeId)?.type === 'Old Sponsor')
          .map(sponsor => (
            <Grid key={sponsor.name} container item md={2} xs={4} justifyContent="center">
              <SponsorComponent
                alt="SponsorImage"
                src={sponsor.logoDir}
                tier="Old Sponsor"
                onClick={() => handelSponsorClick(sponsor)}
              />
            </Grid>
          ))}
      </Grid>
      <SponsorModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        collaboration={sponsor?.contributions}
        dateJoined={timestampMillisecToTermSeasonYear(sponsor?.joinDate ?? 0).termSeason + `${timestampMillisecToTermSeasonYear(sponsor?.joinDate ?? 0).termYear}`}
        image={{
          alt: "sponsor",
          src: sponsor?.logoDir
        }}
        level={sponsorTiers.find(({id}) => id === sponsor?.typeId)?.type ?? ''}
        link={sponsor?.website ?? ''}
        name={sponsor?.name}
        video={sponsor?.youtube}
      />
    </div>
  );
};

export default SponsorList;
