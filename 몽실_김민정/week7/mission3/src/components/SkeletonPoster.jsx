import styled, { keyframes } from "styled-components";

export const SkeletonPoster = () => {
  return (
    <SkeletonWrapper>
      <SkeletonImage />
      <SkeletonTitle />
      <SkeletonSubtitle />
    </SkeletonWrapper>
  );
};

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const SkeletonWrapper = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkeletonBox = styled.div`
  background: #e0e0e0;
  background-image: linear-gradient(
    90deg,
    #e0e0e0 25%,
    #f0f0f0 50%,
    #e0e0e0 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
`;

const SkeletonImage = styled(SkeletonBox)`
  width: 100%;
  height: 225px;
  margin-bottom: 10px;
`;

const SkeletonTitle = styled(SkeletonBox)`
  width: 100%;
  height: 20px;
  margin-bottom: 5px;
`;

const SkeletonSubtitle = styled(SkeletonBox)`
  width: 100px;
  height: 16px;
`;
