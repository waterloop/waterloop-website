import { Server } from 'server';
import { AxiosResponse } from 'axios';
import { Sponsor, SponsorTier } from 'sponsors';

const getSponsorTiers = (server: Server) => (): Promise<AxiosResponse<SponsorTier[]>> => server.get(`/api/sponsors/tiers`);

const getSponsors = (server: Server) => (): Promise<AxiosResponse<Sponsor[]>> => server.get(`/api/sponsors/`);


export default (server: Server) => ({
  getSponsorTiers: getSponsorTiers(server),
  getSponsors: getSponsors(server),
});
