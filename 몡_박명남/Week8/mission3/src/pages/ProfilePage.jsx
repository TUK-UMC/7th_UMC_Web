import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #222;
  color: white;
  border-radius: 8px;
`;

const ProfilePage = () => {
  return (
    <ProfileContainer>
      <h1>My Profile</h1>
      <p>영화를 평가하고 즐겨찾기를 관리하세요!</p>
      {/* TODO: 본 영화 리스트 및 평가 정보 추가 */}
    </ProfileContainer>
  );
};

export default ProfilePage;
