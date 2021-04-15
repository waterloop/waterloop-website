import { PostingLong, PostingShort } from 'api/postings';
import * as actionTypes from '../action-types';

type Converted<T> = Omit<T, "teamId" | "deadline" | "lastUpdated"> & { team: string; deadline: Date; lastUpdated: Date; }

export type PostingShortConverted = Converted<PostingShort>
export type PostingLongConverted = Converted<PostingLong>

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
