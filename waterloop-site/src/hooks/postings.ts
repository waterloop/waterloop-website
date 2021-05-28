import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../api';
import * as postingActions from '../state/postings/actions';
import * as postingSelectors from '../state/postings/selectors';
import { PostingShort, PostingShortConverted, PostingShortWithTeamName } from 'postings';

const dateStringsToDate = (data: PostingShortWithTeamName): PostingShortConverted => ({
  ...data,
  deadline: new Date(data.deadline),
  lastUpdated: new Date(data.lastUpdated),
});



const isPostingWithTeamName = (postings: PostingShort[] | PostingShortWithTeamName[]): postings is PostingShortWithTeamName[] => {
  return 'team' in postings[0];
}

const usePostings = () => {
  const dispatch = useDispatch();
  const postings = useSelector(postingSelectors.postings);
  const getPostings = useCallback(
    async () => {
      try {
        const response = await api.postings.getPostings();
        const postings = response.data;
        if (isPostingWithTeamName(postings)) { //finds team property, however, need to do something about type
          return postings
            .map((item) => ({ ...item, team: item.team}))
            .map(dateStringsToDate) //it's expecting data: Omit<PostingShort, 'teamId'> & { team: string; }): PostingShortConverted
            .filter((posting) => !posting.closed && posting.deadline.getTime() > Date.now());

        }

        else {
          const teams = await api.teams.getTeams();
        if (teams?.data) {
          return postings
            .map((item) => ({ ...item, team: teams.data.find((team) => team.id === item.teamId)?.teamName ?? 'Unable to get team' }))
            .map(dateStringsToDate)
            .filter((posting) => !posting.closed && posting.deadline.getTime() > Date.now());
          }
        }

      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.log(err);
        }
      }
    }, [],
  );

  useEffect(() => {
    (async () => {
      dispatch(postingActions.setPostings((await getPostings()) ?? []));
    })();
  }, [dispatch, getPostings]);

  return {
    postings,
  };
};

export default usePostings;
