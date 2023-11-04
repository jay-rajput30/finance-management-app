import { useDispatch } from "react-redux";
import styles from "./IncomeList.module.css";
import { setAllExpenses } from "../../actions/actions";
import { useEffect } from "react";
import { SAVING_CATEGORIES } from "../../../utils/saving.categories";
import { calculateTotalIncome } from "../../../utils/calculateTotal.utli";
import { useState } from "react";
import {
  sortAscendingList,
  sortDescendingList,
} from "../../../utils/sort.utils";
const IncomeList = ({ incomeList }) => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({ sort: false, category: "All" });

  const sortList = () => {
    if (filters.sort) {
      dispatch(setAllExpenses(sortAscendingList(incomeList)));
    } else {
      dispatch(setAllExpenses(sortDescendingList(incomeList)));
    }
  };
  useEffect(() => {
    sortList();
  }, [filters.sort]);

  const filteredIncomeList =
    filters.category === "All"
      ? incomeList
      : incomeList.filter((item) => item.category === filters.category);

  return (
    <section className={styles.incomeListContainer}>
      <div className={styles.incomeListHeader}>
        {/* <h2>
          total income: Rs.{" "}
          {incomeList.length < 1 ? "0" : calculateTotalIncome(incomeList)}
        </h2> */}
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
            {["All", ...SAVING_CATEGORIES].map((item, idx) => {
              return (
                <option key={idx} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {incomeList.length === 0 ? (
        <p>please add income items</p>
      ) : (
        <ul className={styles.incomeItemContainer}>
          {filteredIncomeList?.map((item) => {
            return (
              <li key={item?._id} className={styles.incomeItem}>
                <p>
                  <strong>category: </strong>
                  {item?.category}
                </p>
                <p>
                  <strong>description: </strong>
                  {item?.description}
                </p>
                <p>
                  <strong>amount: </strong>
                  {item?.amount}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default IncomeList;
