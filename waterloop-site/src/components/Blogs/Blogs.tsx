import BlogPost from "components/BlogLanding/BlogList"
import React from "react"
import styled from "styled-components"


const RecentPostDiv = styled.div`
    padding: 20px;
    width: 100%;
    margin: 0 auto;
`


const RecentImageDiv = styled.div`
    width: 50%;
    height: 300px;
    padding: 20px;
    float: left;
    > .img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
`

const RecentPostText = styled.div`
    padding: 20px;
    float: left;
    > .PostTitle-Blog {
        font-size: 18px;
        font-weight: bold;
        font-style: italic;
        margin-bottom: 5px;
      }
`

const Blogs: React.FC = () => (
    <div className="Block-BlogPage">
        <RecentPostDiv>
            {/* <div className="Block-RecentImage">

            </div> */}
            <RecentImageDiv>
                <img className="img"  src="https://picsum.photos/200/300" />
            </RecentImageDiv>
            <RecentPostText>
                <div className="PostTitle-Blog">The Competition</div>
            </RecentPostText>
        </RecentPostDiv>
        <div className="Block-BlogPosts">
            <div className="PostsBlock-Blog">
                {
                    [0, 1, 2, 3, 4, 5, 6].map(d => (
                        <BlogPost postId={1} />
                    ))
                }
            </div>
        </div>
    </div>
)

export default Blogs