import newsletter from './newsletter';
import postings from './postings';
import server from './server';
import sponsors from './sponsors';
import teams from './teams';
import blogs from './blogs';
import products from './products';

export default {
  postings: postings(server),
  teams: teams(server),
  sponsors: sponsors(server),
  newsletter: newsletter(server),
  blogs: blogs(server),
  products: products(server),
};
