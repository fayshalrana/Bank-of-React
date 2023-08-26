import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Typography from '@mui/material/Typography'
import { Stack } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { homePrice, downPayment, loneAmount, interstRate, loneTerm } = data;

  const totalLoanMonth = loneTerm * 12;
  const interstPerMonth = interstRate / 100 / 12;
  const monthlyPayment =
    (loneAmount * interstPerMonth * (1 + interstPerMonth) ** totalLoanMonth) /
    ((1 + interstPerMonth) ** totalLoanMonth - 1);

  const totalInterstGenerate = monthlyPayment * totalLoanMonth - loneAmount;

  const pieChartData = {
    labels: ["Principle", "Interst"],
    datasets: [
      {
        label: "Rasio of Principle & Interst",
        data: [homePrice, totalInterstGenerate],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Stack gap={10}>
      <Typography variant="h4" textAlign={"center"}>Monthly Payment : ${monthlyPayment.toFixed(2)}</Typography>
      <Stack direction={"row"} justifyContent={"center"}>
      <div>
      <Pie data={pieChartData} />
      </div>
      </Stack>
    </Stack>
  );
};

export default Result;
