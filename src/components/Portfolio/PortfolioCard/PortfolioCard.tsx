import React from 'react';
import { MenuItem } from '../../../redux/Menu/MenuThunk';
import { useAppDispatch } from '../../../hook';
import { setSelectedDish } from '../../../redux/Menu/MenuSlice';
import { Link } from 'react-router-dom';
import {
  Card,
  DescriptionWrapper,
  GradientWrapper,
  TitleWrapper,
} from './PortfolioCardStyled';
import { ReactComponent as ArrowRight } from '../../../assets/images/svg/Icon_arrow-right.svg';

interface PortfolioProps {
  dish: {
    id: string;
    imageTitle: string;
    title: string;
    tags: string[];
  };
  idx: number;
  onDishClick: (dish: MenuItem, idx: number) => void;
}

const PortfolioCard: React.FC<PortfolioProps> = ({
  dish,
  idx,
  onDishClick,
}) => {
  const { id, imageTitle, title, tags } = dish;
  const dispatch = useAppDispatch();
  const tagsString = tags.join(', ');

  const handleDishClick = (dish: MenuItem, idx: number) => {
    console.log('Selected index:', idx);
    const selectedDishWithIndex = { ...dish, index: idx };
    localStorage.setItem('selectedDish', JSON.stringify(selectedDishWithIndex));
    dispatch(setSelectedDish(selectedDishWithIndex));
    onDishClick(dish, idx);
  };

  return (
    <Card data-idx={idx}>
      <img src={imageTitle} alt="image_title" />
      <GradientWrapper></GradientWrapper>
      <DescriptionWrapper>
        <TitleWrapper>
          <h2>{title}</h2>
          <p>{tagsString}</p>
        </TitleWrapper>

        <Link
          style={{ marginBottom: '34px' }}
          to={`/portfolio/${id}/${encodeURIComponent(title)}`}
          onClick={() => handleDishClick(dish, idx)}
        >
          <ArrowRight stroke="white" fill="white" />
        </Link>
      </DescriptionWrapper>
    </Card>
  );
};

export default PortfolioCard;
