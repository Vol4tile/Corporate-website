"use client"
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Aylık organik trafik artışı',
        },
    },
}; const data = {
    labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
    datasets: [
        {
            label: 'Aylık trafik',
            data: [1000, 1500, 2250, 3375, 5062, 7593],
            fill: false,
            borderColor: '#06b6d4',
            tension: 0.1,
        },
    ],
};
const ChartPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-lg text-sky-500 font-secondFont'>İyi bir SEO Optimizasyonunun 6 ay içinde kazandırabilecekleri </h2>
            <h1></h1>
            <Line data={data} options={options} />
        </div>
    );
};

export default ChartPage;
