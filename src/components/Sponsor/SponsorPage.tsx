import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
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
        justify="center"
      >
        {sponsors
          .filter(sponsor => sponsorTiers.find(({id}) => id === sponsor.typeId)?.type  === 'Hypersonic')
          .map(sponsor => (
            <Grid key={sponsor.name} container item md={6} justify="center">
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
        justify="center"
      >
        {sponsors
          .filter(sponsor => sponsorTiers.find(({id}) => id === sponsor.typeId)?.type === 'Supersonic')
          .map(sponsor => (
            <Grid key={sponsor.name} container item md={4} xs={6} justify="center">
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
        justify="center"
      >
        {sponsors
          .filter(sponsor => sponsorTiers.find(({id}) => id === sponsor.typeId)?.type === 'Transonic')
          .map(sponsor => (
            <Grid key={sponsor.name} container item md={3} xs={4} justify="center">
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
        justify="center"
      >
        {sponsors
          .filter(sponsor => sponsorTiers.find(({id}) => id === sponsor.typeId)?.type === 'Sonic')
          .map(sponsor => (
            <Grid key={sponsor.name} container item md={2} xs={4} justify="center">
              <SponsorComponent
                alt="SponsorImage"
                src={sponsor.logoDir}
                tier="Sonic"
                onClick={() => handelSponsorClick(sponsor)}
              />
            </Grid>
          ))}
      </Grid>
      {/* TODO: uncomment me once cms-side Supporters and Old Sponsor tiers work! */}
      {/* <h2>Supporters</h2>
      <Grid
        className="TierWrapper"
        spacing={4}
        container
        alignItems="center"
        justify="center"
      >
        {sponsors
          .filter(sponsor => sponsorTiers.find(({id}) => id === sponsor.typeId)?.type  === 'Supporter')
          .map((supporter, i) => (
          <Grid key={i} container item md={3} xs={3} justify="center">
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
        justify="center"
      >
        {sponsors
          .filter(sponsor => sponsorTiers.find(({id}) => id === sponsor.typeId)?.type === 'Old Sponsor')
          .map(sponsor => (
            <Grid key={sponsor.name} container item md={2} xs={4} justify="center">
              <SponsorComponent
                alt="SponsorImage"
                src={sponsor.logoDir}
                tier="Old Sponsor"
                onClick={() => handelSponsorClick(sponsor)}
              />
            </Grid>
          ))}
      </Grid> */}
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
