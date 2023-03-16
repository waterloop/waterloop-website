import { Server } from 'server';
import { AxiosResponse } from 'axios';
import { RecruitmentForm } from 'recruitment-form';

const getRecruitmentForm = (server: Server) => (): Promise<AxiosResponse<RecruitmentForm>> => server.get(`/api/recruitment`);


export default (server: Server) => ({
    getRecruitmentForm: getRecruitmentForm(server),
});
