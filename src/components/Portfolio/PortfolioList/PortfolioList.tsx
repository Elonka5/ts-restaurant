import React from 'react';
import { PortfolioContainer } from './PortfolioListStyled';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { fetchMenu } from '../../../redux/Menu/MenuThunk';

const PortfolioList: React.FC = () => {
  const dishesData = useAppSelector(state => state.menu.menuData);
  console.log(dishesData);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  if (!dishesData || !Array.isArray(dishesData) || dishesData.length === 0) {
    return <div>Loading...</div>;
  }

  const dishes = Object.values(dishesData[0]);

  return (
    <PortfolioContainer>
      {dishes &&
        dishes.map((dish: any, index: number) => (
          <PortfolioCard
            key={index}
            dish={{
              id: dish.id,
              imageTitle: dish.imageTitle,
              title: dish.title,
              tags: dish.tags.map((tag: string) => tag.trim()),
            }}
          />
        ))}
    </PortfolioContainer>
  );
};

export default PortfolioList;

// interface Dish {
//   id: string;
//   title: string;
//   imageTitle: string;
//   tags: string[];
//   description: {
//     title: string;
//     dish_info: string[];
//     image: string;
//   };
// }

// interface PortfolioListProps {
//   dishes: Dish[];
// }
