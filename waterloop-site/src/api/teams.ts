import {AxiosResponse } from 'axios';
import { Server } from 'server';

export interface Team {
  id:          number;
  teamName:    string;
  description: string;
}

const getTeams = (server: Server) => ():Promise<AxiosResponse<Team[]>> => server.get('/api/team-descriptors');

export default (server: Server) => ({
  getTeams: getTeams(server),
});
