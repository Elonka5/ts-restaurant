import React from 'react';
import Container from '../Container/Container';
import { FooterContainer } from './FooterStyled';

const Footer = () => {
  return (
    <FooterContainer>
      <Container variant="other">
        <div>
          <div>
            <h2>Food Zero</h2>
            <div>
              <h3>Contact</h3>
            </div>
            <div>
              <h3>Never Miss a Recipe</h3>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
