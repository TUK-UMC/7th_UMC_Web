import React from "react";

const SkeletonCard = () => {
  return (
    <div
      style={{
        width: "200px",
        height: "300px",
        backgroundColor: "#333",
        borderRadius: "10px",
        animation: "pulse 1.5s infinite",
      }}
    />
  );
};

export default SkeletonCard;
