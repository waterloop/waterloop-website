import { PostingLong, PostingShort, PostingShortWithTeamName } from 'postings';
import { AxiosResponse } from 'axios';
import { Server } from 'server';

const getPostings = (server: Server) => (joinTeamName: boolean = false): Promise<AxiosResponse<PostingShort[]>> | Promise<AxiosResponse<PostingShortWithTeamName[]>> => server.get(`/api/postings${joinTeamName ? '?joinTeamName=true' : ''}`);
const getPostingById = (server: Server) => (id: number, joinTeamName: boolean = false): Promise<AxiosResponse<PostingLong>> => server.get(`/api/postings/${id}${joinTeamName ? '?joinTeamName=true' : ''}`).then((res: AxiosResponse<PostingLong>) => {
  return res;
});

export default (server: Server) => ({
  getPostingById: getPostingById(server),
  getPostings: getPostings(server),
});
