import React from "react";
import FlipCard from "./flipcard/FlipCard";

const HomeAvatars = () => {
  return (
    <div className="flex"> 
      <FlipCard></FlipCard>
      <FlipCard></FlipCard>
      <FlipCard></FlipCard>
    </div>
  );
};

export default HomeAvatars;
