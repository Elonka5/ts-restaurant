import {
  HeroMenuSection,
  OpenTime,
  OpenTimeWrap,
  TimeWrap,
} from './ContactHeroStyled';
import Container from '../../Container/Container';
import { Text, Title } from '../HeroStyled';
import { DottsLine } from '../../MenuSection/MenuSectionStyled';

const ContactHero = () => {
  return (
    <HeroMenuSection>
      <Container variant="other">
        <Title>Get in Touch</Title>
        <Text style={{ marginBottom: '93px' }}>
          The freshest ingredients for you every day
        </Text>
        <OpenTimeWrap>
          <TimeWrap>
            <p>Open Time</p>
            <p>Sunday - Friday</p>
          </TimeWrap>
          <DottsLine
            style={{
              backgroundImage: 'radial-gradient(white 15%, transparent 16%)',
            }}
          ></DottsLine>
          <OpenTime>
            <Text>Brunch 11:00–12:00</Text>
            <Text>Lunch 13:00–17:00</Text>
            <Text>Dinner 18:00–20:00</Text>
          </OpenTime>
        </OpenTimeWrap>
      </Container>
    </HeroMenuSection>
  );
};

export default ContactHero;
