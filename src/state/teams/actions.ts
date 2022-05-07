import { Team } from 'api/teams';
import * as actionTypes from '../action-types';

export const setTeams = (teams: Team[]) => ({
  type: actionTypes.TEAMS_SET_TEAMS,
  payload: {
    teams,
  },
});
