import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../api";
import * as blogSelector from "../state/blog/selector";
import * as blogActions from "../state/blog/actions";

const getBlogPosts = async (fetch: string) => {
    try {
        let response
        if(fetch === 'latest') {
            response = await api.blogs.getLatestBlogs()
        } else {
            response = await api.blogs.getBlogPosts()
        }
        
        return response.data.posts;
    } catch(error) {
        if (process.env.NODE_ENV === 'development') {
            console.log(error)
        }
        throw error;
    }
}

const usePosts = (fetch='all') => {
    const dispatch = useDispatch();
    const posts = useSelector(blogSelector.posts)
    
    useEffect(() => {
        (async () => {
            dispatch(blogActions.setPosts(await getBlogPosts(fetch)))
        })();
    }, [dispatch, fetch])

    return {
        posts,
    }
}

export default usePosts;
