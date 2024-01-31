import Container from '../Container/Container';
import {
  Features,
  FeaturesList,
  FeaturesTitle,
  FishSvg,
  FruitSvg,
  VegetableSvg,
} from './FeaturesSectionStyled';
import { Text } from '../Hero/HeroStyled';

const FeaturesSection = () => {
  return (
    <Features>
      <Container variant="other">
        <FeaturesList>
          <li>
            <div>
              <FishSvg />
            </div>
            <FeaturesTitle>Premium Quality</FeaturesTitle>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu
            </Text>
          </li>
          <li>
            <div>
              <VegetableSvg />
            </div>
            <FeaturesTitle>Seasonal Vegetables</FeaturesTitle>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu
            </Text>
          </li>
          <li>
            <div>
              <FruitSvg />
            </div>
            <FeaturesTitle>Fresh Fruit</FeaturesTitle>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu
            </Text>
          </li>
        </FeaturesList>
      </Container>
    </Features>
  );
};

export default FeaturesSection;
