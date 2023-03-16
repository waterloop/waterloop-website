import { Server } from 'server';
import { AxiosResponse } from 'axios';
import { GeeseInfo } from 'geese-info';

const getGeeseInfo = (server: Server) => (): Promise<AxiosResponse<GeeseInfo[]>> => server.get(`/api/geese-info/`);

export default (server: Server) => ({
    getGeeseInfo: getGeeseInfo(server),
});