import Container from '../Container/Container';
import { ReservWrap, ReservationSect } from './ReservationSectionStyled';
import { Text } from '../Hero/HeroStyled';
import { TitleMenu } from '../MenuSection/MenuSectionStyled';
import ReservationForm from '../ReservationForm/ReservationForm';

const ReservationSection = () => {
  return (
    <ReservationSect id="reservations">
      <Container variant="other">
        <ReservWrap>
          <TitleMenu>Make a Reservation</TitleMenu>
          <Text>Get in touch with restaurant</Text>
        </ReservWrap>
        <ReservationForm />
      </Container>
    </ReservationSect>
  );
};

export default ReservationSection;
