import React from 'react';
import styled from 'styled-components';

import scrollTo from '../utils/LinkScroll';
import LogoSVG from '../../../static/img/sustainable-tech/ste-logo.svg';
import EmailSVG from '../../../static/img/sustainable-tech/email.svg';
import TwitterSVG from '../../../static/img/sustainable-tech/logo-twitter.svg';
import InstagramSVG from '../../../static/img/sustainable-tech/logo-instagram.svg';
import LinkedInSVG from '../../../static/img/sustainable-tech/logo-linkedin.svg';
import FacebookSVG from '../../../static/img/sustainable-tech/logo-facebook.svg';
import STEFooterImg from '../../../static/img/sustainable-tech/footer-bg.svg';

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
  @media screen and (max-width: 1024px) {
    min-height: 15vh;
  }
  @media screen and (max-width: 425px) {
    padding: 1rem;
    min-height: 30vh;
    overflow: hidden;
  }
  @media screen and (max-width: 375px) {
    min-height: 35vh;
  }
`;

const LogoAndContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  @media screen and (max-width: 425px) {
    padding-top: 3vh;
    padding-bottom: 2vh;
  }
`;

const Logo = styled.img.attrs({
  src: `${LogoSVG}`,
  alt: 'logo',
})`
  width: 260px;
  height: 150px;
  margin-bottom: -15px; // required to make up for slight gap in the svg
  @media screen and (max-width: 425px) {
    width: 132px;
    height: 71px;
  }
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
  height: 20px;
`;

const ContactEmail = styled.a.attrs({
  href: 'mailto:contact@waterloop.ca',
})`
  font-size: 14px;
  margin: 0 15px;
  color: ${fill};
  text-decoration: none;
  margin-top: 1.5px;
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
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const PageTagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1024px) {
    align-self: center
    width: 100vw;
    justify-content: space-evenly;
  }
  @media screen and (max-width: 425px) {
    align-self: center;
    width: 100vw;
    justify-content: space-evenly;
    padding-bottom: 1vh;
  }
`;

const Tag = styled.p`
  font-size: 16px;
  color: ${fill};
  margin-right: 50px;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    margin-right: 0px;
  }
  @media screen and (max-width: 425px) {
    font-size: 12px;
    margin-right: 0px;
  }
`;

const Tags = [
  { text: 'Home', scrollTo: 'home-scroll' },
  { text: 'About', scrollTo: 'about-scroll' },
  { text: 'Schedule', scrollTo: 'schedule-scroll' },
  { text: 'Teams', scrollTo: 'teams-scroll' },
  { text: 'FAQ', scrollTo: 'faq-scroll' },
];

const Socials = [
  { SVG: TwitterSVG, link: 'https://twitter.com/team_waterloop' },
  { SVG: InstagramSVG, link: 'https://www.instagram.com/team_waterloop/' },
  { SVG: FacebookSVG, link: 'https://www.facebook.com/teamwaterloop' },
  { SVG: LinkedInSVG, link: 'https://www.linkedin.com/company/wloop' },
];

const SocialsWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 1024px) {
    align-self: center;
    justify-content: space-evenly;
    width: 100vw;
  }
`;

const SocialBubble = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  margin-left: 25px;
  @media screen and (max-width: 1024px) {
    margin-left: 0px;
  }
`;

interface SocialProps {
  SVG: string;
}

const SocialImg = styled.img.attrs((props: SocialProps) => {
  return {
    src: `${props.SVG}`,
  };
})<SocialProps>`
  height: 14px;
  width: auto;
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
            <EmailIcon />{' '}
            <ContactEmail target="_blank" rel="noopener noreferrer">
              contact@waterloop.ca
            </ContactEmail>
          </ContactInfo>
        </ContactDiv>
      </LogoAndContactWrapper>
      <Divider />
      <PageTagsAndSocialsWrapper>
        <PageTagsWrapper>
          {Tags.map((tag) => (
            <Tag
              key={`ste-footer-${tag.text}-link`}
              onClick={(): void => scrollTo(tag.scrollTo)}
            >
              {tag.text}
            </Tag>
          ))}
        </PageTagsWrapper>
        <SocialsWrapper>
          {Socials.map((social, idx) => {
            return (
              <SocialBubble
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={`ste-footer-social-link-${idx}`}
              >
                <SocialImg SVG={social.SVG} />
              </SocialBubble>
            );
          })}
        </SocialsWrapper>
      </PageTagsAndSocialsWrapper>
    </FooterBackground>
  </>
);

export default STEFooter;
