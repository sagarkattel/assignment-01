'use client';
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Bargraph = () => {
  const [chartData, setChartData] = useState({
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        title: {
          display: false,
          text: 'Weeks',
        },
      },
      y: {
        beginAtZero: true,
        display: true,
        title: {
          display: false,
          text: ' ',
        },
        ticks: {
          stepSize: 100,
          max: 500,
        },
      },
    },
    plugins: {
      legend: {
        align: 'end',
        labels: {
          usePointStyle: true,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: false,
  });

  useEffect(() => {
    setChartData({
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Guest',
          data: [500, 350, 200, 400],
          backgroundColor: 'rgb(152,216,158)',
          borderWidth: 1,
          borderRadius: 6,
          barPercentage: 0.7,
        },
        {
          label: 'User',
          data: [400, 450, 300, 350],
          backgroundColor: 'rgb(238,132,132)',
          borderWidth: 1,
          borderRadius: 6,
          barPercentage: 0.7,
        },
      ],
    });

    setChartOptions({
      scales: {
        x: {
          display: true,
          grid: {
            display: false,
          },
          title: {
            display: false,
            text: 'Weeks',
          },
        },
        y: {
          beginAtZero: true,
          display: true,
          title: {
            display: false,
            text: ' ',
          },
          ticks: {
            stepSize: 100,
            max: 500,
          },
        },
      },
      plugins: {
        legend: {
          align: 'end',
          labels: {
            usePointStyle: true,
          },
        },
      },
      maintainAspectRatio: false,
      responsive: false,
    });
  }, []);

  return (
    <div className="h-[220px] w-full bg-[#ffffff] flex flex-row p-4 border-1 my-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="w-[800px] flex flex-col cursor-pointer">
        <div className="flex flex-col">
          <div>
            <h1 className="font-bold">Activities</h1>
          </div>
          <div>
            <h3 className="text-sm text-slate-500">May-June 2021</h3>
          </div>
        </div>
        <Bar data={chartData} options={chartOptions} width="800px" />
      </div>
    </div>
  );
};

export default Bargraph;
