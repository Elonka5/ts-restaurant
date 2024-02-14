import React from 'react';
import { SingleBlogProps } from '../Hero/DetailBlogHero/DetailBlogHero';
import Container from '../Container/Container';
import { ItalicText, SectionBlogDetails } from './BlogDetailsSectionStyled';
import { Text } from '../Hero/HeroStyled';

export const BlogDetailsSection: React.FC<SingleBlogProps> = ({
  articleData,
}) => {
  return (
    <SectionBlogDetails>
      <Container variant="other">
        <div>
          <Text style={{ color: '#4D4D4D', width: '1218px' }}>
            {articleData.description[0]}
          </Text>
          <div>
            <img
              src={articleData.images[0]}
              alt="element"
              style={{ width: '400px' }}
            />
            <div>
              <img
                src={articleData.images[1]}
                alt="element"
                style={{ width: '200px' }}
              />
              <img
                src={articleData.imageTitle}
                alt="element"
                style={{ width: '200px' }}
              />
            </div>
            <Text style={{ color: '#4D4D4D', width: '993px' }}>
              {articleData.description[1]}
            </Text>
            <ItalicText>{articleData.description[2]}</ItalicText>
            <Text style={{ color: '#4D4D4D', width: '1218px' }}>
              {articleData.description[3]}
            </Text>
          </div>
        </div>
      </Container>
    </SectionBlogDetails>
  );
};
