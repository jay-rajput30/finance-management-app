import { useState } from "react";
import { INCOME_EXPENSE_CATEGORIES } from "../../../utils/incomeExpense.categories";
import styles from "./IncomeExpenseForm.module.css";
import { useDispatch } from "react-redux";
import {
  addNewExpense,
  addNewIncome,
  addNewSaving,
} from "../../actions/actions";
import { SAVING_CATEGORIES } from "../../../utils/saving.categories";

const IncomeExpenseForm = ({ type }) => {
  const [formData, setFormData] = useState({
    amount: 0,
    description: "",
    category:
      type === "expense" ? INCOME_EXPENSE_CATEGORIES[0] : SAVING_CATEGORIES[0],
  });
  const dispatch = useDispatch();
  const incomeExpenseFormSubmitHandler = (e) => {
    console.log({ formData });
    e.preventDefault();
    switch (type) {
      case "saving":
        dispatch(addNewSaving(formData));
        break;
      case "income":
        dispatch(addNewIncome(formData));
        break;
      case "expense":
        dispatch(addNewExpense(formData));
        break;
      default:
        return;
    }
  };

  return (
    <form
      className={styles.incomeExpenseForm}
      onSubmit={incomeExpenseFormSubmitHandler}
    >
      <div className={styles.incomeExpenseFormItem}>
        <label htmlFor="amount">amount </label>
        <input
          type="number"
          placeholder="enter amount"
          id="amount"
          value={formData.amount}
          onChange={(e) =>
            setFormData({ ...formData, amount: +e.target.value })
          }
        />
      </div>
      <div className={styles.incomeExpenseFormItem}>
        <label htmlFor="description">description </label>
        <input
          type="text"
          placeholder="enter description"
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>
      <div className={styles.incomeExpenseFormItem}>
        <label htmlFor="category">category</label>
        <select
          id="category"
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        >
          {type === "expense"
            ? INCOME_EXPENSE_CATEGORIES.map((item, idx) => {
                return (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                );
              })
            : SAVING_CATEGORIES.map((item, idx) => {
                return (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                );
              })}
        </select>
      </div>
      <div className={styles.incomeExpenseFormItem}>
        {type === "income" && <button>add income</button>}
        {type === "expense" && <button>add expense</button>}
        {type === "saving" && <button>add saving</button>}
      </div>
    </form>
  );
};

export default IncomeExpenseForm;
