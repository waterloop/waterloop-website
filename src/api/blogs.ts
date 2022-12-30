import { Server } from "server";
import { AxiosResponse } from "axios";
import { PostResponse } from "blogs";

const getBlogPosts = (server: Server) => (): Promise<AxiosResponse<PostResponse>> => server.get(`/api/blogs`);
const getLatestBlogs = (server: Server) => (): Promise<AxiosResponse<PostResponse>> => server.get(`/api/blogs/latest`);

export default (server: Server) => ({
    getBlogPosts: getBlogPosts(server),
    getLatestBlogs: getLatestBlogs(server)
});
