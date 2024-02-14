import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hook';
import { setSelectedDish } from '../redux/Menu/MenuSlice';
import DishDetailsSection from '../components/DishDetailsSection/DishDetailsSection';
import SinglePortfolioHero from '../components/Hero/SinglePortfolioHero/SinglePortfolioHero';
import NavigationSection from '../components/NavigationSection/NavigationSection';

const DishDetails: React.FC = () => {
  const { dishId } = useParams<{ dishId: string }>();
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(state => state.menu.menuData);
  const [dishData, setDishData] = useState<any>(null);
  console.log(dishData);
  const [currentDishIndex, setCurrentDishIndex] = useState(0);

  useEffect(() => {
    const selectedDish = localStorage.getItem('selectedDish');
    if (selectedDish) {
      const parsedDish = JSON.parse(selectedDish);
      console.log(parsedDish);
      const currentIndex = dishes.findIndex(dish => dish.id === parsedDish.id);
      console.log(currentIndex);
      setCurrentDishIndex(currentIndex);
      setDishData(parsedDish);
      dispatch(setSelectedDish(parsedDish));
    }
  }, [dishId, dispatch, dishes]);

  const handlePreviousClick = () => {
    const newIndex =
      currentDishIndex === 0 ? dishes.length - 1 : currentDishIndex - 1;
    setCurrentDishIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex =
      currentDishIndex === dishes.length - 1 ? 0 : currentDishIndex + 1;
    setCurrentDishIndex(newIndex);
  };

  if (!dishData) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <SinglePortfolioHero dishData={dishData} />
      <DishDetailsSection dishData={dishData} />
      <NavigationSection
        previousDish={
          dishes[
            currentDishIndex === 0 ? dishes.length - 1 : currentDishIndex - 1
          ]
        }
        nextDish={
          dishes[
            currentDishIndex === dishes.length - 1 ? 0 : currentDishIndex + 1
          ]
        }
        onPreviousClick={handlePreviousClick}
        onNextClick={handleNextClick}
        idx={currentDishIndex}
      />
    </main>
  );
};

export default DishDetails;
