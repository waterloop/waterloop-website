import { PostingLongConverted, PostingShortConverted } from 'postings';
import * as actionTypes from '../action-types';


interface PostingState {
  all: PostingShortConverted[];
  byId: Record<number, PostingLongConverted>;
}

const initialState: PostingState = {
  all: [],
  byId: {},
};

interface SetPostings {
  type: typeof actionTypes.POSTINGS_SET_POSTINGS;
  payload: {
    postings: PostingShortConverted[];
  }
}

interface SetPostingById {
  type: typeof actionTypes.POSTINGS_SET_POSTING_BY_ID;
  payload: {
    posting: PostingLongConverted;
    id: number;
  }
}

type PostingAction = SetPostings
                   | SetPostingById;

export default (state = initialState, action: PostingAction) => {
  switch (action.type) {
    case actionTypes.POSTINGS_SET_POSTINGS:
      return {
        ...state,
        all: action.payload.postings,
      };

    case actionTypes.POSTINGS_SET_POSTING_BY_ID:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload.posting,
        },
      };

    default:
      return { ...state };
  }
};
