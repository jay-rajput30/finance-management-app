import { useDispatch, useSelector } from "react-redux";
import styles from "./Expense.module.css";
import { getAllExpense } from "../../actions/actions";
import IncomeExpenseForm from "../../components/IncomeExpenseForm/IncomeExpenseForm";
import ExpenseList from "../../components/ExpenseList/ExpenseList";
import { useEffect } from "react";
const Expense = () => {
  const expenses = useSelector((state) => state.expenses);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllExpense());
  }, [dispatch]);
  return (
    <div className={styles.expenseContainer}>
      <IncomeExpenseForm type="expense" />
      {loading ? (
        <p>loading expense data...</p>
      ) : (
        <ExpenseList expenseList={expenses} />
      )}
    </div>
  );
};

export default Expense;
