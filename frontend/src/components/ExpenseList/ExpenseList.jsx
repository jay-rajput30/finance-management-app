import styles from "./ExpenseList.module.css";

const ExpenseList = ({ expenseList }) => {
  return (
    <section className={styles.expenseListContainer}>
      <ul className={styles.expenseItemContainer}>
        {expenseList.map((item) => {
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
