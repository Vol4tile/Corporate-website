import React from 'react';
import { plans } from '@/app/plans';
import { AiOutlineCheck } from 'react-icons/ai';
import FeatureTable from '@/app/components/Features';

interface PageProps {
  params: {
    id: string;
  };
  searchParams: string;
}

const Page = ({ params, searchParams }: PageProps) => {
  const selectedPlanId = parseInt(params.id, 10);

  const selectedPlan = plans.find(plan => plan.id === selectedPlanId);

  if (!selectedPlan) {
    return <div>Şuanda böyle bir planımız bulunmamaktadır.</div>;
  }

  return (
    <div className="flex flex-col md:flex-row  justify-center items-center  gap-10 min-h-screen  h-auto ">
      <div className={` rounded-2xl   text-gray-500 border  border-gray-300 p-8 w-96 flex flex-col gap-6 `}>
        <div className={`flex justify-between items-center text-sky-500`} ><h2 className="text-xl font-bold">{selectedPlan.title}</h2></div>
        <p className=" text-sm   break-words h-10  " >{selectedPlan.description}</p>
        <ul className="h-40 overflow-hidden  ">
          {selectedPlan.features.map((feature: string, index: number) => (
            <li key={index} className="mb-2 text-gray-500 flex items-center gap-2">
              <AiOutlineCheck className="text-sky-500" />  {feature}
            </li>
          ))}
        </ul>
        <div className={` text-4xl font-bold text-sky-500`}>{selectedPlan.price}₺</div>
      </div>
      <div>
        <FeatureTable />
      </div>
    </div>
  );
};

export default Page;
