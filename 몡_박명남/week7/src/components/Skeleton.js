import React from 'react';
import Skeleton from 'react-loading-skeleton';  
const LoadingSkeleton = () => {
  return (
    <div>
      {}
      <Skeleton count={5} height={50} />
    </div>
  );
};

export default LoadingSkeleton;
