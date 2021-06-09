import { Server } from "server";
import { AxiosResponse } from "axios";
import { Posts } from "blogs";

const getBlogPosts = (server: Server) => (): Promise<AxiosResponse<Posts[]>> => server.get(`posts`);

export default (server: Server) => ({
    getBlogPosts: getBlogPosts(server)
});