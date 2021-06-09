import BlogPost from "components/BlogLanding/BlogList"
import { Button } from "components/Button"
import usePosts from "hooks/blogs"
import React from "react"
import styled from "styled-components"


const BlogPage = styled.div`
`

const RecentPostsWrapper = styled.div`
    margin-bottom: 40px;
`

const RecentPostDiv = styled.div`
    padding:40px;
    width: 100%;
    margin: 0 auto;
    display: inline-block;
`


const RecentImageDiv = styled.div`
    width: 50%;
    height: 300px;
    float: left;
    > .img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        box-shadow: 0px 0px 8px 0px #ada8a8;
    }
`

const RecentPostText = styled.div`
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
`

const Blogs: React.FC = () => {
    const posts = usePosts();
    console.log(posts)
    return (
        <BlogPage>
            <RecentPostsWrapper>
                {
                    [0, 1].map(() => (
                        <RecentPostDiv>
                            <RecentImageDiv>
                                <img className="img" src="https://picsum.photos/200/300" />
                            </RecentImageDiv>
                            <RecentPostText>
                                <div className="PostTitle-Blog">The Competition</div>
                                <div className="PostAuthor-Blog">Written by: John Doe</div>
                                <div className="PostDescription-Blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium dolorem, beatae possimus nesciunt ab? Illum atque doloremque fugit ipsam quibusdam eveniet magnam quod, amet id obcaecati et odio praesentium.</div>
                                <div className="PostReadButton-Blog"><Button
                                    backgroundColor="yellow"
                                    textColor="black"
                                    text="READ"
                                    onClick={(): Window | null => window.open('blog', '_self')}
                                /></div>
                            </RecentPostText>
                        </RecentPostDiv>
                    ))}
            </RecentPostsWrapper>

            <div className="Block-BlogPosts">
                <div className="PostsBlock-Blog">
                    {
                        [0, 1, 2, 3, 4, 5, 6].map(d => (
                            <BlogPost postId={1} />
                        ))
                    }
                </div>
            </div>
        </BlogPage>
    )
}

export default Blogs