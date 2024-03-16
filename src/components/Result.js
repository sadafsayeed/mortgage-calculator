import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {

  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;

  const monthlyPayment = (loanAmount * (interestRate / 100 / 12) *((1 + interestRate / 100 / 12) ** (loanTerm * 12))) / (((1 + interestRate / 100 / 12) ** (loanTerm * 12)) - 1);
  const totalInterest = (monthlyPayment * 12 * loanTerm) - loanAmount;


  const pieChartData = {
    labels: ["Principle", "Total Interest"],
    datasets: [
      {
        label: 'Ratio of Principle and Interest',
        data: [homeValue, totalInterest.toFixed(2)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  return(
  <Stack gap={1}>
    <Typography textAlign="center" variant="h5">
      Monthly Payment: ${monthlyPayment.toFixed(2)}
    </Typography>
    <Stack direction="row" justifyContent="center">
      <div><Pie data={pieChartData} /></div>
    </Stack>
    
  </Stack>
  )
}

export default Result