import React from 'react';
import BlogPost from './BlogList';
import usePosts from "hooks/blogs"

interface Props {
    posts: {}
}

const BlogLanding: React.FC<Props> = props => {
    const posts = usePosts('latest');

    const recent = posts && posts.posts ? posts.posts : []

    return (<div className="Block-Blog">
        <div className="Block-BlogPosts">
            <h2>Our Blogs<a onClick={(): Window | null => window.open('blog', '_self')}><u>Read All &gt;</u></a></h2>
            <div className="PostsBlock-Blog">
                {
                    recent.map(d => (
                        <BlogPost post={d} key={d.id}/>
                    ))
                }
            </div>
        </div>
    </div>
    )
}

export default BlogLanding