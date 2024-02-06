import React from 'react';
import Container from '../Container/Container';
import {
  BottomWrapper,
  ContactWrapper,
  FZTitleWrap,
  FooterContainer,
  FooterTitle,
  Line,
  LinksList,
  TopWrapper,
} from './FooterStyled';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import { Link } from 'react-router-dom';
import { ReactComponent as Instagram } from '../../assets/images/svg/Icon_instagram.svg';
import { ReactComponent as Twitter } from '../../assets/images/svg/Icon_twitter.svg';
import { ReactComponent as Facebook } from '../../assets/images/svg/Icon_facebook.svg';
import { ReactComponent as Youtube } from '../../assets/images/svg/Icon_youtube.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <Container variant="other">
        <TopWrapper>
          <FZTitleWrap>
            <h2>Food Zero.</h2>
          </FZTitleWrap>
          <ContactWrapper>
            <FooterTitle>Contact</FooterTitle>
            <ul>
              <li>
                <Link to="tel:+1+86 852 346 000">+1+86 852 346 000</Link>
              </li>
              <li>
                <a href="mailto:info@foodzero.com">info@foodzero.com</a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/ofWGA15VwswEsrJf7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1959 Sepulveda Blvd. Culver City, CA, 90230
                </a>
              </li>
            </ul>
          </ContactWrapper>
          <SubscribeForm />
        </TopWrapper>
      </Container>
      <Line></Line>
      <Container variant="other">
        <BottomWrapper>
          <p>© 2020 Zero Inc. All rights Reserved</p>

          <LinksList>
            <li>
              <a
                aria-label="link to instagram"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                aria-label="link to twitter"
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
            </li>
            <li>
              <a
                aria-label="link to facebook"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                aria-label="link to youtube"
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube height="28px" />
              </a>
            </li>
          </LinksList>
        </BottomWrapper>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
