import React from 'react';
import BlogPost from './BlogList';

interface Props {
    posts: {}
}

const BlogLanding: React.FC<Props> = props => {
    // const onBlogSelected = (i: number) => {
    //     console.log(i)
    // }

    const onReadAllClicked = () => {

    }
    return (<div className="Block-Blog">
        <div className="Block-BlogPosts">
            <h2>Our Blogs<a onClick={() => onReadAllClicked()}><u>Read All &gt;</u></a></h2>
            <div className="PostsBlock-Blog">
                {
                    [0, 1, 2].map(d => (
                        <BlogPost postId={d} />
                    ))
                }
                {/* <div className="PostBlock-Blog">
                <div className="ContentBlock-Blog" onClick={() => onBlogSelected(1)}>
                    <img src="https://picsum.photos/200/300" />
                    <div className="PostContent-Blog">
                        <div className="PostTitle-Blog">The Competition</div>
                        <div className="PostText-Blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facilis explicabo beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
            </div> */}
                {/* <BlogPost /> */}
                {/* <div className="PostBlock-Blog">
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
            </div> */}
            </div>
        </div>
    </div>
    )
}

export default BlogLanding