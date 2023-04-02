import { Posts } from "blogs"
import React from "react"

interface props {
    post: Posts
}

const BlogPost: React.FC<props> = (props) => {
    const post = props.post
   
   return (
    <>
        {post.visibility !== "Hidden" && <div className="PostBlock-Blog">
            <div className="ContentBlock-Blog" onClick={(): Window | null => window.open(`blog/${post.id}`, '_self')}>
                <img src={post.image} alt={post.title} />
                <div className="PostContent-Blog">
                    <div className="PostTitle-Blog">{post.title}</div>
                    <div className="PostText-Blog">{post.summary}</div>
                </div>
            </div>
        </div>}
    </>
)}

export default BlogPost
