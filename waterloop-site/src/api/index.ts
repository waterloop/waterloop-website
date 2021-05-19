import postings from './postings';
import server from './server';
import sponsors from './sponsors';
import teams from './teams';

export default {
  postings: postings(server),
  teams: teams(server),
  sponsors: sponsors(server),
};
