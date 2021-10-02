import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../api';
import * as teamsActions from '../state/teams/actions';
import * as teamsSelectors from '../state/teams/selectors';

const getTeams = async () => {
  try {
    const response = await api.teams.getTeams();
    return response.data;
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.log(err);
    }
    throw err;
  }
};

const useTeams = () => {
  const dispatch = useDispatch();
  const teams = useSelector(teamsSelectors.teams);

  useEffect(() => {
    (async () => {
      dispatch(teamsActions.setTeams(await getTeams()));
    })();
  }, [dispatch]);

  return {
    teams,
  };
};

export default useTeams;
