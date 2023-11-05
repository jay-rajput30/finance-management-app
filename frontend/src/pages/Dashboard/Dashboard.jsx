import { useState } from "react";
import styles from "./Dashboard.module.css";
import { useSelector } from "react-redux";
import ExpenseChart from "../../components/ExpenseChart/ExpenseChart";
import {
  calculateTotalExpense,
  calculateTotalIncome,
  calculateTotalSaving,
} from "../../../utils/calculateTotal.utli";
import FinanceSummary from "../../components/FinanceSummary/FinanceSummary";
const Dashboard = () => {
  const [reportitem, setReportItem] = useState("incomevsexpense");
  const expenses = useSelector((state) => state.expenses);
  const incomes = useSelector((state) => state.incomes);
  const savings = useSelector((state) => state.savings);
  const barChartData = {
    labels: Array.from(
      new Set([...expenses.map((expense) => expense.category)])
    ),
    datasets: [
      {
        label: "expense breakdown",
        data: [
          ...expenses.map((expense) => expense.amount),
          expenses.reduce((acc, cur) => acc + cur.amount, 0),
        ],
        backgroundColor: ["#ff8e3c", "#fffffe", "#d9376e", "#2a2a2a"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  const pieChartData = {
    labels: ["income", "expense", "saving"],
    datasets: [
      {
        label: "total",
        data: [
          calculateTotalExpense(expenses),
          calculateTotalIncome(incomes),
          calculateTotalSaving(savings),
        ],
        backgroundColor: ["#ff8e3c", "#fffffe", "#d9376e"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.reportContainer}>
        <label htmlFor="report">select report: </label>
        <select
          className={styles.reportDropdown}
          id="report"
          onChange={(e) => setReportItem(e.target.value)}
          value={reportitem}
        >
          <option value="incomevsexpense">income vs expense</option>
          <option value="expensebreakdown">expense breakdown</option>
        </select>
      </div>
      <section>
        {reportitem === "expensebreakdown" && (
          <ExpenseChart expenseData={barChartData} />
        )}
        {reportitem === "incomevsexpense" && (
          <FinanceSummary pieChartData={pieChartData} />
        )}
      </section>
    </div>
  );
};

export default Dashboard;
