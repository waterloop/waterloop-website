import { ReduxState } from "state";

export const postings = (state: ReduxState) => state.postings.all;
export const postingById = (id: number) => (state: ReduxState) => state.postings.byId[id];
