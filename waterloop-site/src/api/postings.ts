import { PostingLong, PostingShort } from 'postings';
import { AxiosResponse } from 'axios';
import { Server } from 'server';

const getPostings = (server: Server) => (): Promise<AxiosResponse<PostingShort[]>> => server.get('/api/postings');
const getPostingById = (server: Server) => (id: number): Promise<AxiosResponse<PostingLong>> => server.get(`/api/postings/${id}`).then((res: AxiosResponse<PostingLong>) => {
  console.log(res);
  return res;
});

export default (server: Server) => ({
  getPostingById: getPostingById(server),
  getPostings: getPostings(server),
});
