import React from 'react';

interface Dish {
  id: string;
  title: string;
}

interface PreviousNextDishProps {
  previousDish: Dish | null;
  nextDish: Dish | null;
  onPreviousClick: () => void;
  onNextClick: () => void;
}

const NavigationSection: React.FC<
  PreviousNextDishProps & { currentDishIndex: number }
> = ({
  previousDish,
  nextDish,
  onPreviousClick,
  onNextClick,
  currentDishIndex,
}) => {
  return (
    <>
      <div>
        {previousDish && (
          <button onClick={onPreviousClick}>{previousDish.title}</button>
        )}
        {nextDish && <button onClick={onNextClick}>{nextDish.title}</button>}
      </div>
      <div>{currentDishIndex}</div>
    </>
  );
};

export default NavigationSection;

//  <Link
//             to={`/portfolio/${previousDish.id}/${encodeURIComponent(
//               previousDish.title
//             )}`}
//           >
//             {previousDish.title}
//           </Link>
//         )}
//         {nextDish && (
//           <Link
//             to={`/portfolio/${nextDish.id}/${encodeURIComponent(
//               nextDish.title
//             )}`}
//           >
//             {nextDish.title}
//           </Link>
