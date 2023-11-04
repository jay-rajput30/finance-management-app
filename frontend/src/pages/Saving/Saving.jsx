import { useDispatch, useSelector } from "react-redux";
import styles from "./Saving.module.css";
import { useEffect } from "react";
import { getAllSaving } from "../../actions/actions";
import IncomeExpenseForm from "../../components/IncomeExpenseForm/IncomeExpenseForm";
import SavingList from "../../components/SavingList/SavingList";
const Saving = () => {
  const savings = useSelector((state) => state.savings);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSaving());
  }, [dispatch]);

  return (
    <div className={styles.savingContainer}>
      <IncomeExpenseForm type="saving" />
      {loading ? (
        <p>loading saving data...</p>
      ) : (
        <SavingList savingList={savings} />
      )}
    </div>
  );
};

export default Saving;
