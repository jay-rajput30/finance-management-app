export const sortAscendingExpenseList = (expenses) => {
  return [...expenses.sort((a, b) => a.amount - b.amount)];
};

export const sortDescendingExpenseList = (expenses) => {
  return [...expenses.sort((a, b) => b.amount - a.amount)];
};
