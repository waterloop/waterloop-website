import { PostingLong } from 'api/postings';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostingLongConverted } from 'state/postings/reducer';
import api from '../api';
import * as postingActions from '../state/postings/actions';
import * as postingSelectors from '../state/postings/selectors';

const dateStringsToDate = (data: Omit<PostingLong, 'teamId'> & { team: string; }): PostingLongConverted => ({
  ...data,
  deadline: new Date(data.deadline),
  lastUpdated: new Date(data.lastUpdated),
});

const usePostingPostingById = (postingId: number, onError: () => void) => {
  const dispatch = useDispatch();
  const posting = useSelector(postingSelectors.postingById(postingId));
  const getPostingById = useCallback(
    async () => {
      try {
        const response = await api.postings.getPostingById(postingId);
        const teams = await api.teams.getTeams();

        return dateStringsToDate({ ...response.data, team: teams?.data?.filter((team) => team.id === response.data.teamId)[0].teamName ?? 'Team Unavailable'});
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      }
    }, [postingId],
  );

  useEffect(() => {
    (async () => {
      try {
        const posting = await getPostingById();
        if (posting) {
          dispatch(postingActions.setPostingById(postingId, posting));
          return;
        }
        throw new Error("Posting Missing");
      } catch (err) {
        // TODO setup a snackbar to handle errors
        onError()
      }
    })();
  }, [dispatch, getPostingById, postingId, onError]);

  return {
    posting,
  };
};

export default usePostingPostingById;
