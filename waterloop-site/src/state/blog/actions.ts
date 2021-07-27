import { Posts } from "blogs";
import * as actionTypes from "../action-types";

export const setPosts = (posts: Posts[]) => ({
    type: actionTypes.BLOG_SET_POSTS,
    payload: {
        posts
    }
})
