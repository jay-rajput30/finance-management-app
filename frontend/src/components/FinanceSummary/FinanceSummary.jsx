import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const FinanceSummary = ({ pieChartData }) => {
  return (
    <div>
      {" "}
      <Pie data={pieChartData} />
    </div>
  );
};

export default FinanceSummary;
