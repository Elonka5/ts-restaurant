import React, { useState } from 'react';
import Container from '../Container/Container';
import {
  ContainerTestimonials,
  MainWrap,
  QuoteText,
  TestimSection,
  Text,
  Thumb,
  WrapImgAndText,
  WrapText,
  WrapperBtn,
} from './TestimonialsSectionStyled';
import { ReactComponent as ArrowLeft } from '../../assets/images/svg/Icon_arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/images/svg/Icon_arrow-right.svg';
import { cards } from '../../helpers/slidercards';

const TestimonialsSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const nextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  return (
    <TestimSection>
      <Container variant="other">
        <ContainerTestimonials>
          <QuoteText
            dangerouslySetInnerHTML={{ __html: cards[currentCardIndex].text }}
          />
          <MainWrap>
            <WrapImgAndText>
              <Thumb>
                <img src={cards[currentCardIndex].avatar} alt="avatar" />
              </Thumb>
              <WrapText>
                <Text>{cards[currentCardIndex].fullName}</Text>
                <p>{cards[currentCardIndex].profession}</p>
              </WrapText>
            </WrapImgAndText>
            <WrapperBtn>
              <button onClick={prevCard}>
                <span>
                  <ArrowLeft />
                </span>
              </button>
              <Text>
                {currentCardIndex + 1}/{cards.length}
              </Text>
              <button onClick={nextCard}>
                <span>
                  <ArrowRight fill="#233000" />
                </span>
              </button>
            </WrapperBtn>
          </MainWrap>
        </ContainerTestimonials>
      </Container>
    </TestimSection>
  );
};

export default TestimonialsSection;
