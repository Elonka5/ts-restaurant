import React from 'react';
import { MenuItem } from '../../redux/Menu/MenuThunk';
import { useAppDispatch } from '../../hook';
import { setSelectedDish } from '../../redux/Menu/MenuSlice';
import { Link } from 'react-router-dom';
import {
  LinkArrowWrap,
  LinkContainer,
  NavigationContainer,
  SectionNavigation,
} from './NavigationSection.Styled';
import { ReactComponent as DottsSvg } from '../../assets/images/svg/Icon_back.svg';
import { ReactComponent as ArrowLeft } from '../../assets/images/svg/Icon_arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/images/svg/Icon_arrow-right.svg';
import Container from '../Container/Container';

interface PreviousNextDishProps {
  previousDish: MenuItem;
  nextDish: MenuItem;
  idx: number;
  onPreviousClick: (previousDish: MenuItem, idx: number) => void;
  onNextClick: (nextDish: MenuItem, idx: number) => void;
}

const NavigationSection: React.FC<PreviousNextDishProps> = ({
  previousDish,
  nextDish,
  onPreviousClick,
  onNextClick,
  idx,
}) => {
  const dispatch = useAppDispatch();

  const handlePrevious = (previousDish: MenuItem, idx: number) => {
    const selectedDishWithIndex = { ...previousDish, index: idx };
    localStorage.setItem('selectedDish', JSON.stringify(selectedDishWithIndex));
    console.log(selectedDishWithIndex);
    dispatch(setSelectedDish(selectedDishWithIndex));
    onPreviousClick(previousDish, idx);
  };

  const handleNext = (nextDish: MenuItem, idx: number) => {
    const selectedDishWithIndex = { ...nextDish, index: idx };
    localStorage.setItem('selectedDish', JSON.stringify(selectedDishWithIndex));
    console.log(selectedDishWithIndex);
    dispatch(setSelectedDish(selectedDishWithIndex));
    onNextClick(nextDish, idx);
  };

  return (
    <SectionNavigation>
      <Container variant="other">
        <NavigationContainer>
          <LinkContainer>
            <LinkArrowWrap>
              {previousDish && (
                <Link
                  to={`/portfolio/${previousDish.id}/${encodeURIComponent(
                    previousDish.title
                  )}`}
                  onClick={() => handlePrevious(previousDish, idx)}
                >
                  <ArrowLeft />
                </Link>
              )}
              <p>previous page</p>
            </LinkArrowWrap>
            <h3>
              {previousDish.title.length > 42
                ? `${previousDish.title.substring(0, 25)}...`
                : previousDish.title}
            </h3>
          </LinkContainer>
          <DottsSvg />
          <LinkContainer>
            <LinkArrowWrap>
              <p>next page</p>
              {nextDish && (
                <Link
                  to={`/portfolio/${nextDish.id}/${encodeURIComponent(
                    nextDish.title
                  )}`}
                  onClick={() => handleNext(nextDish, idx)}
                >
                  <ArrowRight fill="#233000" />
                </Link>
              )}
            </LinkArrowWrap>
            <h3>
              {nextDish.title.length > 42
                ? `${nextDish.title.substring(0, 25)}...`
                : nextDish.title}
            </h3>
          </LinkContainer>
        </NavigationContainer>
      </Container>
    </SectionNavigation>
  );
};

export default NavigationSection;
