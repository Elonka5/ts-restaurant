import Container from '../Container/Container';
import {
  AddressWrap,
  ContactContainer,
  DivLocation,
  LocationWrap,
  SectionLocation,
} from './LocationSectionStyled';
import { Link } from 'react-router-dom';
import fruitsImgWebp from '../../assets/images/fruit_on_table_webp.webp';
import fruitsImgWebpMob from '../../assets/images/fruit_on_table_webp@2x.webp';
import fruitsImg from '../../assets/images/fruit_on_table.jpg';
import fruitsImgMob from '../../assets/images/fruit_on_table@2x.jpg';

import restaurantImgWebp from '../../assets/images/photo_restaurant_webp.webp';
import restaurantImgWebpMob from '../../assets/images/photo_restaurant_webp@2x.webp';
import restaurantImg from '../../assets/images/photo_restaurant.jpg';
import restaurantImgMob from '../../assets/images/photo_restaurant@2x.jpg';
import { FifthText } from '../Hero/ContactHero/ContactHeroStyled';

const LocationSection = () => {
  return (
    <SectionLocation>
      <Container variant="other">
        <LocationWrap>
          <AddressWrap>
            <picture>
              <source
                media="(min-width: 320px)"
                srcSet={`${fruitsImgWebp} 1x, ${fruitsImgWebpMob} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet={`${fruitsImg} 1x, ${fruitsImgMob} 2x`}
                type="image/png"
              />
              <img src={fruitsImg} alt="hero_image" loading="lazy" />
            </picture>
            <ContactContainer>
              <FifthText>
                We can be contacted via <br /> email
                <a href="mailto:info@foodzero.com"> info@foodzero.com</a> <br />
                or telephone on
                <Link to="tel:+1+86 852 346 000"> +86 852 346 000</Link>
              </FifthText>
            </ContactContainer>
          </AddressWrap>
          <DivLocation>
            <div>
              <FifthText>
                We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230
              </FifthText>
              <a
                href="https://maps.app.goo.gl/ofWGA15VwswEsrJf7"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in maps
              </a>
            </div>
            <picture>
              <source
                media="(min-width: 320px)"
                srcSet={`${restaurantImgWebp} 1x, ${restaurantImgWebpMob} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet={`${restaurantImg} 1x, ${restaurantImgMob} 2x`}
                type="image/png"
              />
              <img src={restaurantImg} alt="hero_image" loading="lazy" />
            </picture>
          </DivLocation>
        </LocationWrap>
      </Container>
    </SectionLocation>
  );
};

export default LocationSection;
