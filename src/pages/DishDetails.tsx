// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../hook';
// import { setSelectedDish } from '../redux/Menu/MenuSlice';
// import DishDetailsSection from '../components/DishDetailsSection/DishDetailsSection';
// import SinglePortfolioHero from '../components/Hero/SinglePortfolioHero/SinglePortfolioHero';
// import NavigationSection from '../components/NavigationSection/NavigationSection';

// const DishDetails: React.FC = () => {
//   const { dishId } = useParams<{ dishId: string }>();
//   const dispatch = useAppDispatch();
//   const dishes = useAppSelector(state => state.menu.menuData);
//   const [dishData, setDishData] = useState<any>(null);
//   console.log(dishData);
//   const [currentDishIndex, setCurrentDishIndex] = useState(0);

//   useEffect(() => {
//     const selectedDish = localStorage.getItem('selectedDish');
//     if (selectedDish) {
//       const parsedDish = JSON.parse(selectedDish);
//       const currentIndex = dishes.findIndex(dish => dish.id === parsedDish.id);
//       setCurrentDishIndex(currentIndex);
//       setDishData(parsedDish);
//       dispatch(setSelectedDish(parsedDish));
//     }
//   }, [dishId, dispatch, dishes]);

//   const handlePreviousClick = () => {
//     if (currentDishIndex !== null && currentDishIndex > 0) {
//       const newIndex = currentDishIndex - 1;
//       setCurrentDishIndex(newIndex);
//     }
//   };

//   const handleNextClick = () => {
//     if (currentDishIndex !== null && currentDishIndex < dishes.length - 1) {
//       const newIndex = currentDishIndex + 1;
//       setCurrentDishIndex(newIndex);
//     }
//   };

//   if (!dishData) {
//     return <div>Loading...</div>;
//   }

//   const previousDish =
//     currentDishIndex !== null && currentDishIndex > 0
//       ? dishes[currentDishIndex - 1]
//       : null;
//   const nextDish =
//     currentDishIndex !== null && currentDishIndex < dishes.length - 1
//       ? dishes[currentDishIndex + 1]
//       : null;

//   return (
//     <main>
//       <SinglePortfolioHero dishData={dishData} />
//       <DishDetailsSection dishData={dishData} />
//       <NavigationSection
//         previousDish={previousDish}
//         nextDish={nextDish}
//         onPreviousClick={handlePreviousClick}
//         onNextClick={handleNextClick}
//         currentDishIndex={currentDishIndex}
//       />
//       <div>{dishData.title}</div>
//     </main>
//   );
// };

// export default DishDetails;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../hook';
// import { setSelectedDish } from '../redux/Menu/MenuSlice';
// import DishDetailsSection from '../components/DishDetailsSection/DishDetailsSection';
// import SinglePortfolioHero from '../components/Hero/SinglePortfolioHero/SinglePortfolioHero';
// import NavigationSection from '../components/NavigationSection/NavigationSection';

// const DishDetails: React.FC = () => {
//   const { dishId } = useParams<{ dishId: string }>();
//   const dispatch = useAppDispatch();
//   const dishes = useAppSelector(state => state.menu.menuData);
//   const [dishData, setDishData] = useState<any>(null);
//   const [currentDishIndex, setCurrentDishIndex] = useState(0);

//   useEffect(() => {
//     const selectedDish = localStorage.getItem('selectedDish');
//     if (selectedDish) {
//       const parsedDish = JSON.parse(selectedDish);
//       const currentIndex = dishes.findIndex(dish => dish.id === parsedDish.id);
//       setCurrentDishIndex(currentIndex);
//       setDishData(parsedDish);
//       dispatch(setSelectedDish(parsedDish));
//     }
//   }, [dishId, dispatch, dishes]);

//   const handlePreviousClick = () => {
//     if (currentDishIndex > 0) {
//       const newIndex = currentDishIndex - 1;
//       const newDish = dishes[newIndex];
//       setDishData(newDish);
//       dispatch(setSelectedDish(newDish));
//     }
//   };

//   const handleNextClick = () => {
//     if (currentDishIndex < dishes.length - 1) {
//       const newIndex = currentDishIndex + 1;
//       const newDish = dishes[newIndex];
//       setDishData(newDish);
//       dispatch(setSelectedDish(newDish));
//     }
//   };

//   if (!dishData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <main>
//       <SinglePortfolioHero dishData={dishData} />
//       <DishDetailsSection dishData={dishData} />
//       <NavigationSection
//         previousDish={
//           currentDishIndex > 0 ? dishes[currentDishIndex - 1] : null
//         }
//         nextDish={
//           currentDishIndex < dishes.length - 1
//             ? dishes[currentDishIndex + 1]
//             : null
//         }
//         onPreviousClick={handlePreviousClick}
//         onNextClick={handleNextClick}
//         currentDishIndex={currentDishIndex}
//       />
//     </main>
//   );
// };

// export default DishDetails;

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
  const [currentDishIndex, setCurrentDishIndex] = useState(0);

  useEffect(() => {
    const selectedDish = localStorage.getItem('selectedDish');
    if (selectedDish) {
      const parsedDish = JSON.parse(selectedDish);
      const currentIndex = dishes.findIndex(dish => dish.id === parsedDish.id);
      console.log(currentIndex);
      setCurrentDishIndex(currentIndex);
      setDishData(parsedDish);
      dispatch(setSelectedDish(parsedDish));
    }
  }, [dishId, dispatch, dishes]);

  const handlePreviousClick = () => {
    if (currentDishIndex > 0) {
      const newIndex = currentDishIndex - 1;
      const newDish = dishes[newIndex];
      setCurrentDishIndex(newIndex);
      setDishData(newDish);
      dispatch(setSelectedDish(newDish));
    }
  };

  const handleNextClick = () => {
    if (currentDishIndex < dishes.length - 1) {
      const newIndex = currentDishIndex + 1;
      const newDish = dishes[newIndex];
      setCurrentDishIndex(newIndex);
      setDishData(newDish);
      dispatch(setSelectedDish(newDish));
    }
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
          currentDishIndex > 0 ? dishes[currentDishIndex - 1] : null
        }
        nextDish={
          currentDishIndex < dishes.length - 1
            ? dishes[currentDishIndex + 1]
            : null
        }
        onPreviousClick={handlePreviousClick}
        onNextClick={handleNextClick}
        currentDishIndex={currentDishIndex}
      />
    </main>
  );
};

export default DishDetails;
