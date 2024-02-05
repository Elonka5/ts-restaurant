import React from 'react';
import Container from '../Container/Container';
import {
  ContactWrapper,
  FZTitleWrap,
  FooterContainer,
  FooterTitle,
  TopWrapper,
} from './FooterStyled';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import { Link } from 'react-router-dom';

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

          <div></div>
        </TopWrapper>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
