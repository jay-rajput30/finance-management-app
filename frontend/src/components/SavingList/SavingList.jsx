import styles from "./SavingList.module.css";

const SavingList = ({ savingList }) => {
  return (
    <section className={styles.savingListContainer}>
      <ul className={styles.savingItemContainer}>
        {savingList.map((item) => {
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
