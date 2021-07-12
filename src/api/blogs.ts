import { Server } from "server";
import { AxiosResponse } from "axios";
import { PostResponse } from "blogs";

const getBlogPosts = (server: Server) => (): Promise<AxiosResponse<PostResponse>> => server.get(`blogs`);

export default (server: Server) => ({
    getBlogPosts: getBlogPosts(server)
});