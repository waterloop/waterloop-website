import postings from './postings';
import server from './server';
import teams from './teams';

export default {
  postings: postings(server),
  teams: teams(server),
};
