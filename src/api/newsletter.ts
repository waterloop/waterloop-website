import { AxiosResponse } from 'axios';
import { Server } from 'server';
import { NewsLetterSignUpRequest } from 'newsletter';

const signUp = (server: Server) => (signUpFormBody: NewsLetterSignUpRequest): Promise<AxiosResponse<NewsLetterSignUpRequest>> => server.post('/api/newsletter/', signUpFormBody);

export default (server: Server) => ({
  signUp: signUp(server)
});
