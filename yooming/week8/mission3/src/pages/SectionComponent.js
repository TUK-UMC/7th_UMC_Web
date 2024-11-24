import React, { useRef } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { tmdbAxiosInstance } from '../apis/axios-instance';

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  a {
    font-size: 14px;
    color: #ff3366;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SliderContainer = styled.div`
  position: relative;
`;

const Slider = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 10px 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  flex: 0 0 150px;
  text-align: center;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: white;
`;

const ArrowButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  color: white;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  ${({ left }) => (left ? 'left: -20px;' : 'right: -20px;')}
`;

const fetchMovies = async (endpoint) => {
  const response = await tmdbAxiosInstance.get(`/movie/${endpoint}`, {
    params: {
      language: 'ko-KR',
      page: 1,
    },
  });
  return response.data.results.slice(0, 10); // 상위 10개 영화만 반환
};

function SectionComponent({ title, endpoint, morePage }) {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery([title, endpoint], () => fetchMovies(endpoint));

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === 'right' ? 300 : -300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Section>
      <SectionHeader>
      <h2>{title}</h2>
      <button onClick={() => navigate(morePage)} style={{ background: 'none', border: 'none', color: '#ff3366', cursor: 'pointer' }}>
        더보기
      </button>
      </SectionHeader>

      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <div>데이터를 불러오는 중 오류가 발생했습니다.</div>
      ) : (
        <SliderContainer>
          <ArrowButton left onClick={() => handleScroll('left')}>&lt;</ArrowButton>
          <Slider ref={sliderRef}>
            {data.map((movie) => (
              <Card key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <Title>{movie.title}</Title>
              </Card>
            ))}
          </Slider>
          <ArrowButton onClick={() => handleScroll('right')}>&gt;</ArrowButton>
        </SliderContainer>
      )}
    </Section>
  );
}

export default SectionComponent;
