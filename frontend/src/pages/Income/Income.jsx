import { useEffect } from "react";
import IncomeExpenseForm from "../../components/IncomeExpenseForm/IncomeExpenseForm";
import styles from "./Income.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllIncome } from "../../actions/actions";
import IncomeList from "../../components/IncomeList/IncomeList";
const Income = () => {
  const incomes = useSelector((state) => state.incomes);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllIncome());
  }, [dispatch]);
  return (
    <div className={styles.incomeContainer}>
      <IncomeExpenseForm type="income" />
      {loading ? (
        <p>loading income data...</p>
      ) : (
        <IncomeList incomeList={incomes} />
      )}
    </div>
  );
};

export default Income;
