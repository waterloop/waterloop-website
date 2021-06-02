import React from "react"

interface props {
    postId: number
}

const BlogPost: React.FC<props> = (props) => {
   
    const onBlogSelected = () => {
        console.log(props.postId)
    }
   
   return (<div className="PostBlock-Blog">
        <div className="ContentBlock-Blog" onClick={() => onBlogSelected()}>
            <img src="https://picsum.photos/200/300" />
            <div className="PostContent-Blog">
                <div className="PostTitle-Blog">The Competition</div>
                <div className="PostText-Blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facilis explicabo beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
        </div>
    </div>
)}

export default BlogPost