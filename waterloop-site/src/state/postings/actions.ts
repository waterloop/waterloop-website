import * as actionTypes from '../action-types';
import { PostingLongConverted, PostingShortConverted } from './reducer';

export const setPostings = (postings: PostingShortConverted[]) => ({
  type: actionTypes.POSTINGS_SET_POSTINGS,
  payload: {
    postings,
  },
});

export const setPostingById = (id: number, posting: PostingLongConverted) => ({
  type: actionTypes.POSTINGS_SET_POSTING_BY_ID,
  payload: {
    id, posting,
  },
});
