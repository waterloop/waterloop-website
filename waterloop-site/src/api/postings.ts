import { AxiosResponse } from 'axios';
import { Server } from './server';

export interface PostingShort {
  title:       string;
  deadline:    number;
  closed:      number;
  teamId:      number;
  lastUpdated: number;
  id:          number;
}

export interface PostingLong {
  id:             number;
  title:          string;
  teamId:         number;
  deadline:       number;
  lastUpdated:    number;
  location:       string;
  termYear:       number;
  termSeason:     string;
  description:    string;
  closed:         number;
  timeCommitment: string;
  requirements:   Requirement[];
  tasks:          Task[];
  info:           Info[];
}

export interface Info {
  info: string;
  id:   number;
}

export interface Requirement {
  requirement: string;
  id:          number;
}

export interface Task {
  task: string;
  id:   number;
}

const getPostings = (server: Server) => (): Promise<AxiosResponse<PostingShort[]>> => server.get('/api/postings');
const getPostingById = (server: Server) => (id: number): Promise<AxiosResponse<PostingLong>> => server.get(`/api/postings/${id}`).then((res) => {
  console.log(res);
  return res;
});

export default (server: Server) => ({
  getPostingById: getPostingById(server),
  getPostings: getPostings(server),
});
