import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // 카드 그림자
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 2px solid #444;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  margin: 10px 0 5px;
`;

const CardReleaseDate = styled.p`
  font-size: 14px;
  color: #aaa;
`;

function MovieCard({ imageUrl, title, releaseDate }) {
  return (
    <Card>
      <CardImage src={imageUrl} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardReleaseDate>{releaseDate}</CardReleaseDate>
    </Card>
  );
}

export default MovieCard;