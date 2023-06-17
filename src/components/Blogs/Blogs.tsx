import { Posts } from "blogs"
import { Button } from "components/Button"
import usePosts from "hooks/blogs"
import React from "react"
import styled from "styled-components"

const BlogPage = styled.div`
`

const PostsWrapper = styled.div`
    margin-bottom: 40px;
`

const PostDiv = styled.div`
    padding:40px;
    width: 100%;
    margin: 0 auto;
    display: inline-block;
    @media (max-width: 900px) {
        padding: 0px;
        display: flex;
        flex-direction: column;
    }
`


const ImageDiv = styled.div`
    width: 50%;
    height: 300px;
    float: left;
    > .img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        box-shadow: 0px 0px 8px 0px #ada8a8;
    }
    @media (max-width: 900px) {
        width: 100%;
    }
`

const PostText = styled.div`
    padding: 20px;
    float: right;
    width: 40%;
    > .PostTitle-Blog {
        font-size: 18px;
        font-weight: bold;
        font-style: italic;
        margin-bottom: 5px;
    }
    > .PostAuthor-Blog{
        font-size: 12px;
        font-weight: bold;
        margin: 20px 0;
    }
    > .PostDescription-Blog {
        margin: 10px 0;
        font-size: 14px;
    }
    > .PostReadButton-Blog {
        margin: 25px 0;
        > .ButtonDiv {
            padding: 10px 40px;
            > .ButtonText {
                font-size: 18px;
            }
        }
    }
    @media (max-width: 900px) {
        width: 100%;
    }
`

const Blogs: React.FC = () => {
    const posts = usePosts()
    
    if (posts.posts.find(function(post) {
        return post.visibility == 'Public'
    }) === undefined) {

        return (
            <BlogPage>
                <div>Stay tuned for upcoming blogs!</div>
            </BlogPage>
        )
    }


    posts.posts.sort((a:Posts,b:Posts) => {
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
    });

    return (
        <BlogPage>
            <PostsWrapper>
                {
                    posts.posts.map((post) => (
                        post.visibility !== "Hidden" && 
                        <PostDiv>
                            <ImageDiv>
                                <img className="img" src={post.image} alt={post.title} />
                            </ImageDiv>
                            <PostText>
                                <div className="PostTitle-Blog">{post.title}</div>
                                <div className="PostAuthor-Blog">Written by: {post.author}</div>
                                <div className="PostDescription-Blog">{post.summary}</div>
                                <div className="PostReadButton-Blog"><Button
                                    backgroundColor="yellow"
                                    textColor="black"
                                    text="READ"
                                    onClick={(): Window | null => window.open(`blog/${post.id}`, '_self')}
                                /></div>
                            </PostText>
                        </PostDiv>
                    ))}
            </PostsWrapper>
        </BlogPage>
    )
}

export default Blogs
