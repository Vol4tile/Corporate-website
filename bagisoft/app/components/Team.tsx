import React from 'react';
import EmployeeCard from './EmployeeCard';


const employees = [
  {
    name: 'Jane Smith',
    title: 'UI/UX Designer',
    imageUrl: '/hat.jpg',
  },
  {
    name: 'Jane Smith',
    title: 'UI/UX Designer',
    imageUrl: '/hat.jpg',
  },
  {
    name: 'Jane Smith',
    title: 'Back-end Developer',
    imageUrl: '/hat.jpg',
  },
  {
    name: 'Jane Smith',
    title: 'Full Stack Developer',
    imageUrl: '/hat.jpg',
  },
  {
    name: 'Jane Smith',
    title: 'Full Stack Developer',
    imageUrl: '/hat.jpg',
  },
  {
    name: 'Jane Smith',
    title: 'Full Stack Developer',
    imageUrl: '/hat.jpg',
  },

];

const Team = () => {
  return (
    <div className="bg-white flex flex-col gap-4 justify-center items-center">

      <h1 className='text-lg text-sky-500 font-secondFont'>Ekibimiz </h1>

      <blockquote className="text-gray-500 text-lg italic">
        "Her bir üyenin benzersiz yetenekleri, işbirliğimizde gücümüzü oluşturuyor."
      </blockquote>
      <blockquote className="text-gray-500 text-lg italic">
        "Müşterilerimize değer veriyor, ihtiyaçlarını anlamak ve karşılamak için çalışıyoruz."
      </blockquote>
      <blockquote className="text-gray-500 text-lg italic">
        "Değişen dünyaya ayak uydurmak ve sürekli gelişmek, misyonumuzun bir parçası."
      </blockquote>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center justify-center [&>*:nth-child(5)]:col-start-2">
        {employees.map((employee, index) => (
          <EmployeeCard
            key={index}
            {...employee}

          />
        ))}
      </div>
    </div>
  );
};

export default Team;