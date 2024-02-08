import React, { useState } from 'react';
import { PortfolioContainer } from './PortfolioListStyled';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { MenuItem, fetchMenu } from '../../../redux/Menu/MenuThunk';
import { Link } from 'react-router-dom';
import { setSelectedDish } from '../../../redux/Menu/MenuSlice';

const PortfolioList: React.FC = () => {
  const dishes = useAppSelector(state => state.menu.menuData);
  console.log(dishes);
  const [selectedTag, setSelectedTag] = useState('All');
  console.log(dishes);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const filteredDishes = dishes.filter(dish => {
    return selectedTag === 'All' || dish.tags.includes(selectedTag);
  });

  const handleDishClick = (dish: MenuItem) => {
    localStorage.setItem('selectedDish', JSON.stringify(dish));
    dispatch(setSelectedDish(dish));
  };

  return (
    <div>
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
          <Link
            key={index}
            to={`/portfolio/${dish.id}/${encodeURIComponent(dish.title)}`}
            onClick={() => handleDishClick(dish)}
          >
            <PortfolioCard dish={dish} />
          </Link>
        ))}
      </PortfolioContainer>
    </div>
  );
};

export default PortfolioList;
