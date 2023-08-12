import React from 'react';
interface AboutUsProps {
  title: string;
  description: string;
  img: string;
  id: number
}
const AboutUs = ({ title, description, img, id }: AboutUsProps) => {

  return (
    <div className="flex">
      <div className={`w-1/2 flex items-center justify-center p-8 ${id && id === 1 ? 'order-1' : 'order-2'}`}>
        <div>
          <h2 className="text-3xl font-bold text-sky-500 mb-4 font-secondFont">{title && <span>{title}</span>}</h2>
          <p className="text-lg">
            {description && <span>{description}</span>}
          </p>
        </div>
      </div>
      <div className={`w-1/2 ${id && id === 1 ? 'order-2' : 'order-1'}`}>
        {img && <img
          src={img}
          alt="Background"
          className="w-full h-auto"
        />}

      </div>

    </div>
  );
};

export default AboutUs;
