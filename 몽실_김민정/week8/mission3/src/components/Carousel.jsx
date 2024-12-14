import { useState } from "react";
import { styled } from "styled-components";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

export const Carousel = ({ children, type = "general" }) => {
  const [hoverContainer, setHoverContainer] = useState(false);
  const [current, setCurrent] = useState(0);

  return (
    <Container
      onMouseEnter={() => setHoverContainer(true)}
      onMouseLeave={() => setHoverContainer(false)}
    >
      <CarouselContainer $current={current} $type={type}>
        {children}
      </CarouselContainer>
      {hoverContainer && (
        <>
          {current !== 0 && (
            <ArrowLeftButton onClick={() => setCurrent((prev) => prev + 100)}>
              <FaArrowLeft size={30} color='white' />
            </ArrowLeftButton>
          )}
          <ArrowRightButton onClick={() => setCurrent((prev) => prev - 100)}>
            <FaArrowRight size={30} color='white' />
          </ArrowRightButton>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  width: calc(100vw- 60px);
  position: relative;
  padding-left: 90px;
`;

const CarouselContainer = styled.div`
  display: flex;
  gap: ${({ $type }) => ($type === "rank" ? "120px" : "10px")};
  transform: ${({ $current }) => `translateX(${$current}%)`};
  transition: transform 0.3s ease-in-out;
`;

const ArrowButton = styled.button`
  background-color: black;
  width: 50px;
  height: 50px;
  border-radius: 1000px;
  position: absolute;
  border: none;
  cursor: pointer;
  top: 135px;
  opacity: 0.7;

  &:hover {
    transform: scale(1.2);
  }
`;

const ArrowRightButton = styled(ArrowButton)`
  right: 10px;
`;

const ArrowLeftButton = styled(ArrowButton)`
  left: 10px;
`;
