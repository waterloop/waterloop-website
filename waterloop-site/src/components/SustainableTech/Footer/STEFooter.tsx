import React from 'react';
import styled from 'styled-components';
import LogoSVG from '../../../static/img/logos/sustechlogo.svg';
import EmailSVG from '../../../static/img/assets/email_black.svg';
import TwitterSVG from '../../../static/img/logos/logo-twitter.svg';
import InstagramSVG from '../../../static/img/logos/logo-instagram.svg';
import LinkedInSVG from '../../../static/img/logos/logo-linkedin.svg';
import FacebookSVG from '../../../static/img/logos/logo-facebook.svg';

const fill = '#203D7A';

// To stay consistent with the previous website's footer, used same scss with changed background photo
const FooterBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 15vh;
  bottom: 0;
  background: #e5f6fa;
  padding: 5vh 10vw 15vh;
  transition: all 0.3s;
  @media screen and (max-width: 425px) {
    padding: 8vh 15vw;
    min-height: 70vh;
    overflow: hidden;
  }
`;
const LogoAndContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

const Logo = styled.img.attrs({
  src: `${LogoSVG}`,
  alt: 'logo',
})`
  width: 260px;
  height: 150px;
  margin-bottom: -15px; // required to make up for slight gap in the svg
`;

const ContactDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const ContactUs = styled.p`
  font-size: 18px;
  margin: 10px 0;
  color: ${fill};
  font-weight: bold;
`;

const ContactInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

const EmailIcon = styled.img.attrs({
  src: `${EmailSVG}`,
  alt: 'email',
})`
  width: 28px;
  height: 24px;
`;

const ContactEmail = styled.p`
  font-size: 14px;
  margin: 0 5px;
  color: ${fill};
`;

const Divider = styled.hr`
  width: 100%;
  border-color: ${fill};
  margin: 10px 0;
`;

const PageTagsAndSocialsWrapper = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PageTagsWrapper = styled.div`
  //   width: 30vw;
  display: flex;
  flex-direction: row;
`;

const Tag = styled.p`
  font-size: 16px;
  color: ${fill};
  padding-right: 50px;
`;

const Tags = ['Home', 'About', 'Schedule', 'Team', 'Sponsors', 'FAQ']; //potentially make this an array of JSONs for tags

const Socials = [TwitterSVG, InstagramSVG, FacebookSVG, LinkedInSVG];

const SocialsWrapper = styled.div`
  display: flex;
`;

const SocialBubble = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  margin-left: 25px;
`;

const SocialImg = (img: string) => styled.img.attrs({
  src: `${img}`,
})`
  width: 14px;
  height: 14px;
`;

const STEFooter: React.FC = () => (
  <FooterBackground>
    <LogoAndContactWrapper>
      <Logo />
      <ContactDiv>
        <ContactUs>Contact Us</ContactUs>
        <ContactInfo>
          <EmailIcon /> <ContactEmail>contact@waterloop.ca</ContactEmail>
        </ContactInfo>
      </ContactDiv>
    </LogoAndContactWrapper>
    <Divider />
    <PageTagsAndSocialsWrapper>
      <PageTagsWrapper>
        {Tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </PageTagsWrapper>
      <SocialsWrapper>
        {Socials.map((social) => {
          const Img = SocialImg(social);
          return (
            <SocialBubble>
                <Img />
            </SocialBubble>
          );
        })}
      </SocialsWrapper>
    </PageTagsAndSocialsWrapper>
  </FooterBackground>
);

export default STEFooter;
