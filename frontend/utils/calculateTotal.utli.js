export const calculateTotalExpense = (expenses) => {
  return expenses.reduce((acc, cur) => acc + cur.amount, 0);
};

export const calculateTotalSaving = (savings) => {
  return savings.reduce((acc, cur) => acc + cur.amount, 0);
};

export const calculateTotalIncome = (incomes) => {
  return incomes.reduce((acc, cur) => acc + cur.amount, 0);
};
