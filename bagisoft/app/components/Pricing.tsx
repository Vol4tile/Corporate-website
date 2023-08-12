import React from 'react';
import PricingCard from './PricingCard';

import { plans } from '../plans';
const Pricing = () => {


    return (
        <div className="flex flex-col justify-center items-center gap-7 ">
            <h2 className='text-lg text-sky-500 font-secondFont'>Fiyatlandırma </h2>

            <p className='text-gray-500 text-sm'>İstediğiniz paketten başlayabilirsiniz. Üst pakete geçişlerde var olan özelliklerin üstüne ekleme yapılabilmektedir.</p>
            <div className=" grid grid-cols-1 md:grid-cols-3 mt-10 ">
                {plans.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                ))}
            </div>
        </div>
    );
};

export default Pricing;
