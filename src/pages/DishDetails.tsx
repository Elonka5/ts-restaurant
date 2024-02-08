import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../hook';
import { setSelectedDish } from '../redux/Menu/MenuSlice';
import DishDetailsSection from '../components/DishDetailsSection/DishDetailsSection';
import SinglePortfolioHero from '../components/Hero/SinglePortfolioHero/SinglePortfolioHero';

const DishDetails: React.FC = () => {
  const { dishId } = useParams<{ dishId: string }>();
  const dispatch = useAppDispatch();
  const [dishData, setDishData] = useState<any>(null);
  console.log(dishData);

  useEffect(() => {
    const selectedDish = localStorage.getItem('selectedDish');
    if (selectedDish) {
      setDishData(JSON.parse(selectedDish));
      dispatch(setSelectedDish(JSON.parse(selectedDish)));
    }
  }, [dishId, dispatch]);

  if (!dishData) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <SinglePortfolioHero dishData={dishData} />
      <DishDetailsSection dishData={dishData} />
    </main>
  );
};

export default DishDetails;
