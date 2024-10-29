// components/Card.tsx
import React from 'react';

interface CardProps {
  name: string;
  email: string;
  imageUrl: string;
  socialLinks: { url: string; iconUrl: string }[];
}

const Card = ({ name, email, imageUrl, socialLinks }: CardProps) => {
  return (
    <div className="w-[300px] h-[400px] bg-[#06426f] border border-gray-300 rounded-lg p-5 shadow-md m-5">
      <div className="flex justify-center mb-5">
        <img src={imageUrl} alt={name} className="w-[130px] h-[130px] rounded-full" />
      </div>
      <h2 className="text-lg font-bold text-white mb-2">{name}</h2>
      <p className="text-base text-white mb-5">{email}</p>
      <div className="flex justify-center mt-24">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} className="mx-2">
            <img src={link.iconUrl} alt="Social Icon" className="w-[30px] h-[30px]" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Card;