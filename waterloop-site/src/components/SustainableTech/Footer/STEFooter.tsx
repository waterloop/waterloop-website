import React from 'react';
import styled from 'styled-components';
import LogoSVG from '../../../static/ste/ste-logo.svg';
import EmailSVG from '../../../static/ste/icons/email.svg';
import TwitterSVG from '../../../static/ste/icons/logo-twitter.svg';
import InstagramSVG from '../../../static/ste/icons/logo-instagram.svg';
import LinkedInSVG from '../../../static/ste/icons/logo-linkedin.svg';
import FacebookSVG from '../../../static/ste/icons/logo-facebook.svg';
import STEFooterImg from '../../../static/ste/background/footer-bg.svg';

const fill = '#fff'; // Fill for text

const FooterBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 9rem;
  bottom: 0;
  background: #3c8c4a;
  padding: 2.5rem 6rem 7.5rem;
  transition: all 0.3s;
  border: none !important;
  @media screen and (max-width: 425px) {
    padding: 1rem;
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
  border-width: 1px;
`;

const PageTagsAndSocialsWrapper = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`;

const PageTagsWrapper = styled.div`
  //   width: 30vw;
  display: flex;
  flex-direction: row;
`;

const Tag = styled.p`
  font-size: 16px;
  color: ${fill};
  margin-right: 50px;
  cursor: pointer;
`;

const Tags = [
  // tags are dummy for now as I'm not aware of what tags we'll be using for each section.
  { text: 'Home', tag: 'dummy' },
  { text: 'About', tag: 'dummy' },
  { text: 'Schedule', tag: 'dummy' },
  { text: 'Team', tag: 'dummy' },
  { text: 'Sponsors', tag: 'dummy' },
  { text: 'FAQ', tag: 'dummy' },
];

const Socials = [
  { SVG: TwitterSVG, link: 'https://twitter.com/team_waterloop' },
  { SVG: InstagramSVG, link: 'https://www.instagram.com/team_waterloop/' },
  { SVG: FacebookSVG, link: 'https://www.facebook.com/teamwaterloop' },
  { SVG: LinkedInSVG, link: 'https://www.linkedin.com/company/wloop' },
];

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

interface SocialProps {
  SVG: string;
}

const SocialImg = styled.img.attrs((props: SocialProps) => {
  return {
    src: `${props.SVG}`,
  };
})<SocialProps>`
  width: 14px;
  height: 14px;
`;

const FooterImg = styled.img.attrs({
  src: STEFooterImg,
})`
  width: 100%;
  height: 100%;
  margin-bottom: -0.5rem;
  background-color: #d1e6f5;
`;

const STEFooter: React.FC = () => (
  <>
    <FooterImg />
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
            <Tag onClick={() => console.log('use hook to go to place in page')}>{tag.text}</Tag> // Hook in which it will scroll to particular portion on website is not done yet
          ))}
        </PageTagsWrapper>
        <SocialsWrapper>
          {Socials.map((social) => {
            return (
              <SocialBubble>
                <a href={social.link} target="_blank">
                  <SocialImg SVG={social.SVG} />
                </a>
              </SocialBubble>
            );
          })}
        </SocialsWrapper>
      </PageTagsAndSocialsWrapper>
    </FooterBackground>
  </>
);

export default STEFooter;
