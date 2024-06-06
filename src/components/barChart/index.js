import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from 'react-chartjs-2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, plugins } from 'chart.js';
import './index.css'
// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ chartKey }) => {
  const chartRef = useRef(null);
  //options.plugins.legend.labels
  const data = {
    labels: ['Min', 'February', 'March', 'April', 'May', 'June','July',"August"],
    datasets: [
      {
        labels:'sales',
        data: [1, 2, 3, 22, 5, 16,7,18],
        backgroundColor: [
            '#ffffff', 
            '#ffffff', 
            '#ffffff', 
            '#ff3300',
            '#ffffff', 
               
            '#ffffff', 
            '#ff3300',     
            '#ffffff', 
          ],
        barThickness: 80
        
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
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
          labels: {
            display: false,
          },
        },
        title: {
          display: false,
        },
      }
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
      once: false, // Changed to false to allow repeat animations
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
      once: false, // Changed to false to allow repeat animations
    });

    const resetChart = () => {
      setChartKey(prevKey => prevKey + 1); // Change the key to force re-render
    };

    window.addEventListener('visibilitychange', resetChart);

    return () => {
      window.removeEventListener('visibilitychange', resetChart);
    };
  }, []);

  return (
    
    <div style={{ padding: '40px',width:'80%',height:'60%',marginBottom:"100px",border: '2px solid gray',borderRadius:'8px',
    boxShadow: '0 1px 8px 0 gray'
    }}>
      
      <h1 className='bar-chart-heading'>Annual Average Salaries</h1>
      
      <BarChart chartKey={chartKey} />
      
    </div>
    
    
  );
};

export default AnimationChart;

