import React, { useEffect } from 'react';
import PortfolioList from '../components/Portfolio/PortfolioList/PortfolioList';
import { useAppDispatch } from '../hook';
import { fetchMenu } from '../redux/Menu/MenuThunk';

const Portfolio = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  return (
    <div>
      <PortfolioList />
    </div>
  );
};

export default Portfolio;
