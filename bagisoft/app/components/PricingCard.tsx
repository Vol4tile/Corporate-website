import Link from 'next/link';
import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai'

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  description: string;
  id: number;
}

const PricingCard = ({ title, price, features, description, id }: PricingCardProps) => {
  return (
    <div className={`   ${id === 2 && 'xl:rounded-r-2xl  xl:border-l-0  '} ${id === 0 && 'xl:rounded-l-2xl xl:border-r-0'} ${id === 1 && 'xl:rounded-t-2xl grow xl:-mt-6 '}  text-gray-500 border  border-gray-300 p-8 w-96 flex flex-col gap-6 `}>
      <div className={`flex justify-between items-center ${id === 1 ? 'text-sky-500' : 'text-gray-700'}`} ><h2 className="text-xl font-bold">{title}</h2> {id === 1 && (<span className='bg-sky-50 rounded-md px-2 py-1'>Popüler</span>)}</div>
      <p className=" text-sm   break-words h-10  " >{description}</p>
      <ul className="h-40 overflow-hidden  ">
        {features.map((feature: string, index: number) => (
          <li key={index} className="mb-2 text-gray-500 flex items-center gap-2">
            <AiOutlineCheck className="text-sky-500" />  {feature}
          </li>
        ))}
      </ul>
      <div className={`${id == 1 && 'mt-5   '} text-4xl font-bold text-sky-500`}>{price}₺</div>
      <Link href={`/plans/${id}`}>
        <button
          className={`block w-full py-2 px-4 bg-sky-400  rounded-md  font-bold  text-white hover:opacity-80  transition-all`}
        >
          Planı Seç
        </button></Link>
    </div>
  );
};

export default PricingCard;
