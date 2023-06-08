import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Charts = () => {
  let chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'], // Your data labels
        datasets: [
          {
            label: 'Dataset 1',
            data: [10, 20, 30], // Your data values
            backgroundColor: 'rgba(0, 123, 255, 0.5)', // Customize colors
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        // Customize chart options as needed
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default Charts;
