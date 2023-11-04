export const sortAscendingList = (expenses) => {
  return [...expenses.sort((a, b) => a.amount - b.amount)];
};

export const sortDescendingList = (expenses) => {
  return [...expenses.sort((a, b) => b.amount - a.amount)];
};
