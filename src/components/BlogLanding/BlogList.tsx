import { Posts } from "blogs"
import React from "react"

interface props {
    post: Posts
}

const BlogPost: React.FC<props> = (props) => {
    const post = props.post
    const onBlogSelected = () => {
        console.log(props.post.id)
        window.open(props.post.link, '_blank')
    }
   
   return (<div className="PostBlock-Blog">
        <div className="ContentBlock-Blog" onClick={() => onBlogSelected()}>
            <img src={post.image} />
            <div className="PostContent-Blog">
                <div className="PostTitle-Blog">{post.title}</div>
                <div className="PostText-Blog">{post.summary}</div>
            </div>
        </div>
    </div>
)}

export default BlogPost
