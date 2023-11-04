import { useEffect, useState } from "react";
import { calculateTotalExpense } from "../../../utils/calculateTotal.utli";
import styles from "./ExpenseList.module.css";
import { INCOME_EXPENSE_CATEGORIES } from "../../../utils/incomeExpense.categories";
import {
  sortAscendingList,
  sortDescendingList,
} from "../../../utils/sort.utils";
import { useDispatch } from "react-redux";
import { setAllExpenses } from "../../actions/actions";

const ExpenseList = ({ expenseList }) => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({ sort: false, category: "All" });

  const sortList = () => {
    if (filters.sort) {
      dispatch(setAllExpenses(sortAscendingList(expenseList)));
    } else {
      dispatch(setAllExpenses(sortDescendingList(expenseList)));
    }
  };
  useEffect(() => {
    sortList();
  }, [filters.sort]);

  const filteredExpenseList =
    filters.category === "All"
      ? expenseList
      : expenseList.filter((item) => item.category === filters.category);
  return (
    <section className={styles.expenseListContainer}>
      <div className={styles.expenseListHeader}>
        <h2>total expense: Rs. {calculateTotalExpense(expenseList)}</h2>
        <div className={styles.filterContainer}>
          <div className={styles.sortCheckboxContainer}>
            <input
              type="checkbox"
              checked={filters.sort}
              id="sort-amount"
              onChange={(e) =>
                setFilters({ ...filters, sort: e.target.checked })
              }
              value={filters.sort}
            />
            <label htmlFor="sort-amount">sort</label>
          </div>
          <select
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
          >
            {["All", ...INCOME_EXPENSE_CATEGORIES].map((item, idx) => {
              return (
                <option key={idx} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <ul className={styles.expenseItemContainer}>
        {filteredExpenseList.map((item) => {
          return (
            <li key={item._id} className={styles.expenseItem}>
              <p>
                <strong>category: </strong>
                {item.category}
              </p>
              <p>
                <strong>description: </strong>
                {item.description}
              </p>
              <p>
                <strong>amount: </strong>
                {item.amount}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ExpenseList;
