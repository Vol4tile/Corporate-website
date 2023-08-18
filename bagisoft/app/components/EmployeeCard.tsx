import React from 'react';

interface EmployeeCardProps {
  name: string;
  title: string;
  imageUrl: string;
}

const EmployeeCard = ({ name, title, imageUrl }: EmployeeCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-10">
      <img src={imageUrl} alt={`${name}'s avatar`} className="rounded-full w-24 h-24 mx-auto mb-4 object-cover  " />
      <h3 className="text-black font-semibold text-lg mb-2">{name}</h3>
      <p className="text-gray-500">{title}</p>
    </div>
  );
};

export default EmployeeCard;