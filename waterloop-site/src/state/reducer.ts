import { combineReducers } from 'redux';
import postingsReducer from './postings/reducer';
import teamsReducer from './teams/reducer';

export default combineReducers({
  postings: postingsReducer,
  teams: teamsReducer,
});
