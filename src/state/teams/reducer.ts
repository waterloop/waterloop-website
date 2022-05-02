import { Team } from 'api/teams';
import * as actionTypes from '../action-types';

export interface TeamState {
  all: Team[];
}

const initialState: TeamState = {
  all: [],
};

interface SetTeams {
  type: typeof actionTypes.TEAMS_SET_TEAMS;
  payload: { teams: Team[] };
}

type TeamAction = SetTeams;

export default (state = initialState, { type, payload }: TeamAction) => {
  switch (type) {
    case actionTypes.TEAMS_SET_TEAMS:
      return {
        ...state,
        all: payload.teams,
      };

    default:
      return { ...state };
  }
};

