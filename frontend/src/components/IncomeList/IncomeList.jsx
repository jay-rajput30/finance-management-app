import styles from "./IncomeList.module.css";
const IncomeList = ({ incomeList }) => {
  return (
    <section className={styles.incomeListContainer}>
      <ul className={styles.incomeItemContainer}>
        {incomeList.map((item) => {
          return (
            <li key={item._id} className={styles.incomeItem}>
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

export default IncomeList;
