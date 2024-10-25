import styled from "styled-components";
import { formatImageURL } from "../apis/utils/formatImageURL";

export const CircleProfile = ({ name, department, profileImage }) => {
  return (
    <Container>
      <ProfileImage $image={formatImageURL(profileImage) || null} />
      <InfoWrapper>
        <h2 className='profile-name'>{name}</h2>
        <h3 className='profile-department'>{department}</h3>
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: min-content;
  gap: 15px;
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: #515151;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) =>
    props.$image ? `url(${props.$image})` : "none"};
`;

const InfoWrapper = styled.div`
  height: 80%;
  text-align: center;
  .profile-name {
    font-size: 18px;
    height: 33px;
    font-weight: 500;
  }
  .profile-department {
    font-size: 12px;
    opacity: 0.5;
  }
`;
