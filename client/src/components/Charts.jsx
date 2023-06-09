import React, { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const Charts = () => {
  // let chartRef = useRef(null);

  // default state of "stats" = template
  const [stats, setStats] = useState([
    {
      monthlyEarnings: 20,
      monthlyCosts: 10,
      projectedSales: 30,
      employeeId: "",
    },
    {
      monthlyEarnings: 2,
      monthlyCosts: 0,
      projectedSales: 3,
      employeeId: "",
    },
    {
      monthlyEarnings: 200,
      monthlyCosts: 3,
      projectedSales: 100,
      employeeId: "",
    }
  ])

  // default Bar chart data
  const deptData = {
    labels: ['Monthly Costs', 'Monthly Earnings', 'Projected Sales'], // Your data labels
    datasets: [
      {
        label: 'Sales',
        data: [stats[2].monthlyCosts, stats[2].monthlyEarnings, stats[2].projectedSales], // Your data values
        backgroundColor: 'rgba(0, 123, 255, 0.5)', // Customize colors
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1,
      },
    ],
  }

  // obtains data from Department Stats
  const getStats = async () => {
    try {
        const query = await fetch('/api/department', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const res = await query.json()
        console.log(res)
        if (res) {
          setStats(res.payload)
          console.log(stats)
            // console.log(stats)
        }
    } catch (err) {
        console.log(err.message)
    }
  }

  // "reactivates" the useEffect statement by calling it more than once via "stats.length" counting up
  useEffect(() => {
    getStats();
    console.log(stats[2].monthlyCosts);
  }, [stats.length]); 

 /*  useEffect(() => {
    console.log(stats);
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Monthly Costs', 'Monthly Earnings', 'Projected Sales'], // Your data labels
        datasets: [
          {
            label: 'Sales',
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
  }, []) */

  // returns a Bar chart using react-chartjs-2; uses data from deptData
  return (
    <>
      <Bar
        id='barChart'
        data={deptData}
      />
    </>
  );
};

export default Charts;
