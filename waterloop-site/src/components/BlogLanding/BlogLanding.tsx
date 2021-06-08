import React from 'react';
import BlogPost from './BlogList';

interface Props {
    posts: {}
}

const BlogLanding: React.FC<Props> = props => {
    return (<div className="Block-Blog">
        <div className="Block-BlogPosts">
            <h2>Our Blogs<a onClick={(): Window | null => window.open('blog', '_self')}><u>Read All &gt;</u></a></h2>
            <div className="PostsBlock-Blog">
                {
                    [0, 1, 2].map(d => (
                        <BlogPost postId={d} />
                    ))
                }
            </div>
        </div>
    </div>
    )
}

export default BlogLanding