import { styled } from "styled-components";
import { keyframes } from "styled-components";
import { CircleProfile } from "../components/CircleProfile";

export const MovieDetailSkeleton = () => {
  return (
    <Container>
      <TitleSkeleton />
      <SubinfoSkeleton />
      <OverViewSkeleton />
      <Divider />
      <CreditsWrapper>
        <h3>감독/출연</h3>
        <CreditsScroll>
          {Array.from({ length: 30 }).map((_, index) => (
            <CircleProfile key={index} profileImage='' />
          ))}
        </CreditsScroll>
      </CreditsWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  padding: 20px;
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const Skeleton = styled.div`
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

const TitleSkeleton = styled(Skeleton)`
  width: 250px;
  height: 50px;
  margin-top: 35px;
`;

const SubinfoSkeleton = styled(Skeleton)`
  width: 300px;
  height: 20px;
  margin-top: 20px;
`;

const OverViewSkeleton = styled(Skeleton)`
  width: 400px;
  height: 250px;
  margin-top: 70px;
  margin-bottom: 20px;
`;

const Divider = styled.hr`
  color: ${({ theme }) => theme.colors.white};
  width: 40%;
  text-align: left;
  margin-left: 0;
`;

const CreditsWrapper = styled.div`
  h3 {
    font-size: 30px;
  }
`;

const CreditsScroll = styled.div`
  width: 87vw;
  height: 400px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 20px;
`;
