import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from 'api';
import * as sponsorActions from 'state/sponsors/actions';
import * as sponsorSelectors from 'state/sponsors/selectors';
import { Sponsor, SponsorTier } from 'sponsors';

type GetSponsorsCallback = () => Promise<{
  sponsorTiers: SponsorTier[],
  sponsors: Sponsor[]
}>

const useSponsors = () => {
  const dispatch = useDispatch();
  const sponsors = useSelector(sponsorSelectors.sponsors);
  const sponsorTiers = useSelector(sponsorSelectors.sponsorTiers);

  const getSponsors: GetSponsorsCallback = useCallback(
    async () => {
      const sponsorTiers = await api.sponsors.getSponsorTiers();
      const response = await api.sponsors.getSponsors();

      return {
        sponsorTiers: sponsorTiers.data,
        sponsors: response.data
      };
    }, [],
  );

  useEffect(() => {
    (async () => {
      try {
        const { sponsorTiers, sponsors } = await getSponsors();
        dispatch(sponsorActions.setSponsorTiers(sponsorTiers));
        dispatch(sponsorActions.setSponsors(sponsors));
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.log(err);
        }
      }
    })();
  }, [dispatch, getSponsors]);

  return {
    sponsorTiers,
    sponsors,
  };
};

export default useSponsors;
