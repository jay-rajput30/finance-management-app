import { useState } from "react";
import { INCOME_EXPENSE_CATEGORIES } from "../../../utils/incomeExpense.categories";
import styles from "./IncomeExpenseForm.module.css";

const IncomeExpenseForm = ({ type }) => {
  const [formData, setFormData] = useState({
    amount: 0,
    description: "",
    category: INCOME_EXPENSE_CATEGORIES[0],
  });
  const incomeExpenseFormSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ formData });
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
          {INCOME_EXPENSE_CATEGORIES.map((item, idx) => {
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