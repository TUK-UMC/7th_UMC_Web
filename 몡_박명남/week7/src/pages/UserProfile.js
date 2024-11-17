import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchUserProfile = async () => {
  const response = await fetch('https://api.example.com/user');
  if (!response.ok) {
    throw new Error('사용자 정보를 가져오는 데 실패했습니다.');
  }
  return response.json();
};

const UserProfile = () => {
  const { data, isLoading, isError, error } = useQuery('user-profile', fetchUserProfile);

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <p>에러발생: {error.message}</p>;
  }

  return (
    <div>
      <h1>사용자 정보</h1>
      <p>이름: {data.name}</p>
      <p>이메일: {data.email}</p>
    </div>
  );
};

export default UserProfile;
