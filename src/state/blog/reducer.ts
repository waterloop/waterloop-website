import { Posts } from 'blogs'
import * as actionTypes from '../action-types'

interface BlogState {
    posts: Posts[]
}

const initialState: BlogState = {
    posts: []
}

interface SetPosts {
    type: typeof actionTypes.BLOG_SET_POSTS;
    payload: { posts: Posts[] };
}

export default (state = initialState, { type, payload }: SetPosts) => {
    switch (type) {
        case actionTypes.BLOG_SET_POSTS: {
            return {
                ...state,
                posts: payload.posts
            }
        }
        default: return { ...state }
    }
}
