import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../api';
import * as postingActions from '../state/postings/actions';
import * as postingSelectors from '../state/postings/selectors';
import { PostingShort, PostingShortWithTeamName,PostingShortConverted } from 'postings';
import { dateToLocalTime } from '../utils/datetime'


const dateStringsToDate = (data: Omit<PostingShort, 'teamId'> & { team: string; }): PostingShortConverted => ({
  ...data,
  deadline: dateToLocalTime(new Date(data.deadline)),    // Convert UTC to local time
  lastUpdated: dateToLocalTime(new Date(data.lastUpdated)),
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
            .map((item) => ({ ...item, team: item.teamName}))
            .map(dateStringsToDate) //it's expecting data: Omit<PostingShort, 'teamId'> & { team: string; }): PostingShortConverted
<<<<<<< HEAD
            .filter((posting) => !posting.closed && posting.deadline.getTime() > Date.now());
=======
            // .filter((posting) => !posting.closed && posting.deadline.getTime() > Date.now());

>>>>>>> 750fff018ad24d0a80ffc48fc0b894ad7c1cbc84
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
