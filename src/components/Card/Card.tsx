// components/Card/Card.tsx
import React from 'react';

interface CardProps {
  name: string;
  rm: string;
  imageUrl: string;
}

const Card = ({ name, rm, imageUrl}: CardProps) => {
  return (
    <div className="w-[200px] h-[100px] bg-[#f308b0] border border-gray-#000000 rounded-lg p-5 shadow-md m-5">
      <div className="flex justify-center mb-5">
        <img src={imageUrl} alt={name} className="w-[130px] h-[130px] rounded-full" />
      </div>
      <h2 className="text-lg font-bold text-black mb-2">{name}</h2>
      <p className="text-base text-black mb-5">{rm}</p>
      <div className="flex justify-center mt-24">
      </div>
    </div>
  );
};

export default Card;