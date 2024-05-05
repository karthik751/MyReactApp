import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function BarChart({ data }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && data) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy the previous chart instance
      }

      const ctx = chartRef.current.getContext('2d');

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [{
            label: 'Data',
            data: data.values,
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Bar color
            borderColor: 'rgba(54, 162, 235, 1)', // Border color
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [data]);

  return (
    <div>
      <canvas className='max-w-2xl max-h-80' ref={chartRef} width={0} height={0}></canvas>
    </div>
  );
}

export default BarChart;