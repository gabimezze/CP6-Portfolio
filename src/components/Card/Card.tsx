// components/Card/Card.tsx
import React from 'react';
import { StaticImageData } from 'next/image';

interface CardProps {
  name: string;
  rm: string;
  imageUrl: string | StaticImageData;
}

const Card = ({ name, rm, imageUrl}: CardProps) => {
  
  const imageSrc = typeof imageUrl === 'string' ? imageUrl : imageUrl.src;

  return (
    <div className="w-[200px] h-[100px] bg-[#f308b0] border border-gray-#000000 rounded-lg p-5 shadow-md m-5">
      <div className="flex justify-center mb-5">
      <img src={imageSrc} alt={name} className="w-[130px] h-[130px] rounded-full" />
      </div>
      <h2 className="text-lg font-bold text-black mb-2">{name}</h2>
      <p className="text-base text-black mb-5">{rm}</p>
      <div className="flex justify-center mt-24">
      </div>
    </div>
  );
};

export default Card;