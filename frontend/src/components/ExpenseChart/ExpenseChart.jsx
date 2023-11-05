import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ExpenseChart = ({ expenseData }) => {
  return (
    <div>
      <Bar data={expenseData} />
    </div>
  );
};

export default ExpenseChart;
