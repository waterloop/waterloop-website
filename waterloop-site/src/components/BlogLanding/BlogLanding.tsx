import React from 'react';

interface Props {
    posts: {}
}

const BlogLanding: React.FC<Props> = props => {
    const onBlogSelected = (i: number) => {
        console.log(i)
    }
    
    const onReadAllClicked = () => {
        
    }
    return (<div className="Block-Blog">
        <h2>Our Blogs<a onClick={() => onReadAllClicked()}><u>Read All &gt;</u></a></h2>
        <div className="PostsBlock-Blog">
            <div className="PostBlock-Blog">
                <div className="ContentBlock-Blog" onClick={() => onBlogSelected(1)}>
                    <img src="https://picsum.photos/200/300" />
                    <div className="PostContent-Blog">
                        <div className="PostTitle-Blog">The Competition</div>
                        <div className="PostText-Blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facilis explicabo beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
            </div>
            <div className="PostBlock-Blog">
                <div className="ContentBlock-Blog">
                    <img src="https://picsum.photos/200/300" />
                    
                    <div className="PostContent-Blog">
                        <div className="PostTitle-Blog">The Competition</div>
                        <div className="PostText-Blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facilis explicabo beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
            </div>
            <div className="PostBlock-Blog">
                <div className="ContentBlock-Blog">
                    <img src="https://picsum.photos/200/300" />
                    
                    <div className="PostContent-Blog">
                        <div className="PostTitle-Blog">The Competition</div>
                        <div className="PostText-Blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facilis explicabo beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default BlogLanding