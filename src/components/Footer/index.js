import React from 'react';
import {
  FaTelegram,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              C.C.C.C
            </SocialLogo>
            <WebsiteRights>CrazyCritterCombatClub © 2022 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://t.me/CrazyCritterCC' target='_blank' aria-label='Telegram'>
                <FaTelegram />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/CrazyCritterCC' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.youtube.com/channel/UCFk8DVxs9IVvUFP2UQQ8QxQ'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Twitter'
                href='https://www.twitter.com/CrazyCritterCC'
              >
                <FaTwitter />
              </SocialIconLink>

            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
