import React, { useEffect, useRef, useState } from 'react';
// import ReactDOM from 'react-dom';
import { Bar } from 'react-chartjs-2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './index.css';
// import { color, fontString } from 'chart.js/helpers';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ chartKey }) => {
  const chartRef = useRef(null);

  const data = {
    labels: ['7L', '12L', '3L', '5L', '8L', '15L', '3.5L', '15L'],
    datasets: [
      {
        data: [5, 15, 9, 22, 5, 16, 7, 18],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          const gradientMay = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradientMay.addColorStop(0, '#ff9933');
          gradientMay.addColorStop(1, '#ff3399');
          
          const gradientJune = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradientJune.addColorStop(0, '#ff9933');
          gradientJune.addColorStop(1, '#ff3399');

          const backgroundColor = ['#ffffff', gradientMay, '#ffffff', gradientMay, '#ffffff', gradientJune, '#ffffff', '#ffffff'];
          
          return backgroundColor[context.dataIndex];
        },
        barThickness: 80
      },
    ],
  };

  const options = {
    scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: 'white', 
            font:{
              size:18
            }
          },
          title: {
            display: true,
            text: 'Experience(years)',
            color:"white",
            font:{
              size:18
            }
        },
        

        },
        x: {
          ticks: {
            color: 'white', 
            font: {
              size: 18, 
            },
            
          },
         
          title:{
            display:true,
            text:'Salary',
            color:"white",
            font:{
              size:18
            }
            
          }
        },
      },
    animation: {
      duration: 1000,
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !context.dropped) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
          context.dropped = true;
        }
        return delay;
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
      title: {
        display: false,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const chart = chartRef.current;

      if (chart) {
        const rect = chart.canvas.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible) {
          chart.update();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    AOS.init({
      duration: 1000,
      once: false,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div data-aos="fade-up">
      <Bar ref={chartRef} data={data} options={options} key={chartKey} />
    </div>
  );
};

const AnimationChart = () => {
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const resetChart = () => {
      setChartKey(prevKey => prevKey + 1);
    };

    window.addEventListener('visibilitychange', resetChart);

    return () => {
      window.removeEventListener('visibilitychange', resetChart);
    };
  }, []);

  return (
    <div style={{ padding: '40px', width: '80%', marginBottom: "100px", border: '2px solid gray', borderRadius: '8px',
    boxShadow: '0 1px 8px 0 gray' }}>
      <h1 className='bar-chart-heading'>Annual Average Salaries</h1>
      <BarChart chartKey={chartKey} />
    </div>
  );
};

export default AnimationChart;
