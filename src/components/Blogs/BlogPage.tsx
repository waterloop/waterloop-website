import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import usePosts from "hooks/blogs"
import { Posts } from 'blogs'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 70px;
`;

const Title = styled.p`
  font-family: "IBM Plex Sans";
  font-style: italic;
  font-size: 36pt;
  margin: 12pt 0;
  color: #232636;
  margin: 0 0 30px 0;
`;

const Text = styled.p`
  color: black
  font-family: "IBM Plex Sans";
  font-size: 18px;
  margin: 0 0 20px 0;
  padding: 0;
`;

const Content = styled.p`
  margin: 0 15vw 0 15vw;
`;

const SubInfo = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const BlogImage = styled.img`
  height: 20%;
  margin: 0 0 20px 0;
`;

const BodyText = styled.pre`
  font-family: Consolas, monospace;
  margin: 0 0 20px 0;
  padding: 0;
  width: 70vw;
  white-space: pre-wrap;
`;

interface RouteParams {
  id: string;
}

const BlogPage: React.FC = () => {
  const [blogFound, setBlogFound] = useState<Posts>(
    { author: "", category: "", closed: "", date: "", id: -1,
      image: "", content: "", summary: "", title: "", visibility: ""})

  const stringId: RouteParams = useParams();
  const blogId: number = parseInt(stringId.id, 10);
  const {posts} = usePosts();

  useEffect(() => {
    // filter to get the blog with specific id
    console.log(posts)
    posts.every(blog => {
      console.log(blog.id)
      if (blog.id === blogId){
          setBlogFound(blog);
          return false;
      }
      return true;
    })
  }, [posts])

  return (
    <Container>
      {blogFound.id === -1 || blogFound.visibility === "Hidden" ? <Text>Sorry, the blog you're looking for doesnt exist</Text> 
        : 
        <>
          <Title>{blogFound.title}</Title>
          <BlogImage src={blogFound.image} alt={blogFound.title} />
          <SubInfo>
            <Text><b>Author:</b> {blogFound.author}</Text>
            <Text><b>Published Date:</b> {blogFound.date}</Text>
          </SubInfo>
          <Content>
            <BodyText>
              <Text>{blogFound.content}</Text>
            </BodyText>
          </Content>
        </>
      }
    </Container>
  );
};

export default BlogPage;
