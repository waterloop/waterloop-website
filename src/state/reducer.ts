import { combineReducers } from 'redux';
import postingsReducer from './postings/reducer';
import teamsReducer from './teams/reducer';
import sponsorsReducer from './sponsors/reducer';
import blogReducer from './blog/reducer';
import productsReducer from './products/reducer'

export default combineReducers({
  postings: postingsReducer,
  teams: teamsReducer,
  sponsors: sponsorsReducer,
  blog: blogReducer,
  products: productsReducer
});
