import React, { useState } from 'react';
import { PortfolioContainer, PortfolioSection } from './PortfolioListStyled';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { MenuItem, fetchMenu } from '../../../redux/Menu/MenuThunk';
import Container from '../../Container/Container';

const PortfolioList: React.FC = () => {
  const dishes = useAppSelector(state => state.menu.menuData);
  const [selectedTag, setSelectedTag] = useState('All');

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const filteredDishes = dishes.filter(dish => {
    return selectedTag === 'All' || dish.tags.includes(selectedTag);
  });

  return (
    <PortfolioSection>
      <Container variant="other">
        <div>
          {[
            'All',
            'Starter',
            'Launch',
            'Dinner',
            'Drinks',
            'Sweets',
            'Fruits',
          ].map(tag => (
            <button key={tag} onClick={() => setSelectedTag(tag)}>
              {tag}
            </button>
          ))}
        </div>
        <PortfolioContainer>
          {filteredDishes.map((dish: any, index: number) => (
            <PortfolioCard
              key={dish.id}
              dish={dish}
              idx={index}
              onDishClick={(dish: MenuItem, idx: number) =>
                console.log('Selected index:', idx)
              }
            />
          ))}
        </PortfolioContainer>
      </Container>
    </PortfolioSection>
  );
};

export default PortfolioList;
