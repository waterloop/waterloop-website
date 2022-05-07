import { Sponsor, SponsorTier } from 'sponsors';
import * as actionTypes from '../action-types';

interface SponsorState {
  allSponsors: Sponsor[];
  allTiers: SponsorTier[];
}

const initialState: SponsorState = {
  allSponsors: [],
  allTiers: [],
};

interface SetSponsors {
  type: typeof actionTypes.SPONSORS_SET_SPONSORS,
  payload: {
    sponsors: Sponsor[]
  }
}

interface SetSponsorTiers {
  type: typeof actionTypes.SPONSORS_SET_SPONSOR_TIERS,
  payload: {
    sponsorTiers: SponsorTier[]
  }
}

type SponsorAction = SetSponsors
                   | SetSponsorTiers;

export default (state = initialState, action: SponsorAction) => {
  switch (action.type) {
    case actionTypes.SPONSORS_SET_SPONSORS:
      return {
        ...state,
        allSponsors: action.payload.sponsors,
      };

    case actionTypes.SPONSORS_SET_SPONSOR_TIERS:
      return {
        ...state,
        allTiers: action.payload.sponsorTiers,
      }

    default:
      return { ...state };
  }
};
