import { useDispatch } from "react-redux";
import styles from "./SavingList.module.css";
import { useEffect, useState } from "react";
import { setAllSavings } from "../../actions/actions";
import {
  sortAscendingList,
  sortDescendingList,
} from "../../../utils/sort.utils";
import { SAVING_CATEGORIES } from "../../../utils/saving.categories";
import { calculateTotalSaving } from "../../../utils/calculateTotal.utli";

const SavingList = ({ savingList }) => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({ sort: false, category: "All" });

  const sortList = () => {
    if (filters.sort) {
      dispatch(setAllSavings(sortAscendingList(savingList)));
    } else {
      dispatch(setAllSavings(sortDescendingList(savingList)));
    }
  };
  useEffect(() => {
    sortList();
  }, [filters.sort]);

  const filteredsavingList =
    filters.category === "All"
      ? savingList
      : savingList.filter((item) => item.category === filters.category);
  return (
    <section className={styles.savingListContainer}>
      <div className={styles.savingListHeader}>
        <h2>
          total saving: Rs.{" "}
          {savingList.length < 1 ? "0" : calculateTotalSaving(savingList)}
        </h2>
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
      <ul className={styles.savingItemContainer}>
        {filteredsavingList.map((item) => {
          return (
            <li key={item._id} className={styles.savingItem}>
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

export default SavingList;
