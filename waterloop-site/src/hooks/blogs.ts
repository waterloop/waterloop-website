import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../api";
import * as blogSelector from "../state/blog/selector";
import * as blogActions from "../state/blog/actions";

const getBlogPosts = async () => {
    try {
        const response = await api.blogs.getBlogPosts()
        return response.data;
    } catch(error) {
        if (process.env.NODE_ENV === 'development') {
            console.log(error)
        }
        throw error;
    }
}

const usePosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(blogSelector.posts)
    
    useEffect(() => {
        (async () => {
            dispatch(blogActions.setPosts(await getBlogPosts()))
        })();
    }, [dispatch])

    return {
        posts,
    }
}

export default usePosts;