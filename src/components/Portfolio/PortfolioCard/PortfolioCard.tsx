import React from 'react';

interface PortfolioProps {
  dish: {
    id: string;
    imageTitle: string;
    title: string;
    tags: string[];
  };
}

const PortfolioCard: React.FC<PortfolioProps> = ({ dish }) => {
  const { id, imageTitle, title, tags } = dish;
  const tagsString = tags.join(', ');
  return (
    <li key={id} style={{ width: '300px' }}>
      <img src={imageTitle} alt="image_title" />
      <h2>{title}</h2>
      <p>{tagsString}</p>
    </li>
  );
};

export default PortfolioCard;
