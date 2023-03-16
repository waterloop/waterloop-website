import newsletter from './newsletter';
import postings from './postings';
import server, { serverDashboard } from './server';
import sponsors from './sponsors';
import teams from './teams';
import application from './application'

export default {
  postings: postings(server),
  teams: teams(server),
  sponsors: sponsors(server),
  newsletter: newsletter(server),
  application: application(serverDashboard)
};
