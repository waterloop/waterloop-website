import * as actionTypes from '../action-types';
import { SponsorTier, Sponsor } from 'sponsors';

export const setSponsors = (sponsors: Sponsor[]) => ({
  type: actionTypes.SPONSORS_SET_SPONSORS,
  payload: {
    sponsors,
  },
});

export const setSponsorTiers = (sponsorTiers: SponsorTier[]) => ({
  type: actionTypes.SPONSORS_SET_SPONSOR_TIERS,
  payload: {
    sponsorTiers
  },
});
