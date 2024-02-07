import {
  FirstContainer,
  FirstWrap,
  SectionStaff,
  StaffContainer,
  ThirdHeading,
} from './StaffSectionStyled';
import Container from '../Container/Container';
import managerImgWebp from '../../assets/images/photo_manager_webp.webp';
import managerImgWebpMob from '../../assets/images/photo_manager_webp@2x.webp';
import managerImg from '../../assets/images/photo_manager.jpg';
import managerImgMob from '../../assets/images/photo_manager@2x.jpg';
import chefImgWebp from '../../assets/images/chef_photo_webp.webp';
import chefImgWebpMob from '../../assets/images/chef_photo_webp@2x.webp';
import chefImg from '../../assets/images/chef_photo.jpg';
import chefImgMob from '../../assets/images/chef_photo@2x.jpg';
import { Text } from '../Hero/HeroStyled';

export const StaffSection = () => {
  return (
    <SectionStaff>
      <Container variant="other">
        <StaffContainer>
          <FirstWrap>
            <FirstContainer>
              <ThirdHeading>Restaurant Manager</ThirdHeading>
              <Text>Carson Hugn</Text>
              <picture>
                <source
                  media="(min-width: 320px)"
                  srcSet={`${managerImgWebp} 1x, ${managerImgWebpMob} 2x`}
                  type="image/webp"
                />
                <source
                  media="(min-width: 320px)"
                  srcSet={`${managerImg} 1x, ${managerImgMob} 2x`}
                  type="image/png"
                />
                <img src={managerImg} alt="hero_image" loading="lazy" />
              </picture>
            </FirstContainer>

            <Text
              style={{
                color: '#4D4D4D',
                marginLeft: 'auto',
                textAlign: 'end',
                width: '510px',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed
              in pellentesque ornare nunc nisl. Augue habitant accumsan, ut
              parturient orci ac etiam congue mi.{' '}
            </Text>
          </FirstWrap>
          <FirstWrap style={{ gap: '329px' }}>
            <Text
              style={{ marginTop: '160px', color: '#4D4D4D', width: '510px' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed
              in pellentesque ornare nunc nisl.
            </Text>

            <FirstContainer>
              <ThirdHeading>Executive Chef</ThirdHeading>
              <p>Jane Cooper</p>
              <picture>
                <source
                  media="(min-width: 320px)"
                  srcSet={`${chefImgWebp} 1x, ${chefImgWebpMob} 2x`}
                  type="image/webp"
                />
                <source
                  media="(min-width: 320px)"
                  srcSet={`${chefImg} 1x, ${chefImgMob} 2x`}
                  type="image/png"
                />
                <img src={chefImg} alt="hero_image" loading="lazy" />
              </picture>
            </FirstContainer>
          </FirstWrap>
        </StaffContainer>
      </Container>
    </SectionStaff>
  );
};

//style={{ gap: '329px' }}
