export const addNewIncome = (incomeData) => async (dispatch) => {
  try {
    dispatch({ type: "DATA_LOADING" });
    const response = await fetch("http://localhost:3002/income", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(incomeData),
    });
    const data = await response.json();
    if (data) {
      dispatch({ type: "ADD_INCOME_SUCCESS", payload: data.data });
    }
  } catch (e) {
    console.error(e.message);
    dispatch({ type: "ADD_INCOME_FAILURE", payload: e.message });
  } finally {
    dispatch({ type: "DATA_LOADED" });
  }
};

export const getAllIncome = () => async (dispatch) => {
  try {
    dispatch({ type: "DATA_LOADING" });
    const response = await fetch("http://localhost:3002/income");
    const data = await response.json();
    if (data) {
      dispatch({ type: "GET_INCOME_SUCCESS", payload: data.data });
    }
  } catch (e) {
    console.error(e.message);
    dispatch({ type: "GET_INCOME_FAILURE", payload: e.message });
  } finally {
    dispatch({ type: "DATA_LOADED" });
  }
};

//expense

export const addNewExpense = (expenseData) => async (dispatch) => {
  try {
    dispatch({ type: "DATA_LOADING" });
    const response = await fetch("http://localhost:3002/expense", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expenseData),
    });
    const data = await response.json();
    if (data) {
      dispatch({ type: "ADD_EXPENSE_SUCCESS", payload: data.data });
    }
  } catch (e) {
    console.error(e.message);
    dispatch({ type: "ADD_EXPENSE_FAILURE", payload: e.message });
  } finally {
    dispatch({ type: "DATA_LOADED" });
  }
};

export const getAllExpense = () => async (dispatch) => {
  try {
    dispatch({ type: "DATA_LOADING" });
    const response = await fetch("http://localhost:3002/expense");
    const data = await response.json();
    if (data) {
      dispatch({ type: "GET_EXPENSE_SUCCESS", payload: data.data });
    }
  } catch (e) {
    console.error(e.message);
    dispatch({ type: "GET_EXPENSE_FAILURE", payload: e.message });
  } finally {
    dispatch({ type: "DATA_LOADED" });
  }
};

export const setAllExpenses = (expensesData) => {
  return { type: "SET_EXPENSE_DATA", payload: expensesData };
};

//saving

export const addNewSaving = (savingData) => async (dispatch) => {
  try {
    dispatch({ type: "DATA_LOADING" });
    const response = await fetch("http://localhost:3002/saving", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(savingData),
    });
    const data = await response.json();
    if (data) {
      dispatch({ type: "ADD_SAVING_SUCCESS", payload: data.data });
    }
  } catch (e) {
    console.error(e.message);
    dispatch({ type: "ADD_SAVING_FAILURE", payload: e.message });
  } finally {
    dispatch({ type: "DATA_LOADED" });
  }
};

export const getAllSaving = () => async (dispatch) => {
  try {
    dispatch({ type: "DATA_LOADING" });
    const response = await fetch("http://localhost:3002/saving");
    const data = await response.json();
    if (data) {
      dispatch({ type: "GET_SAVING_SUCCESS", payload: data.data });
    }
  } catch (e) {
    console.error(e.message);
    dispatch({ type: "GET_SAVING_FAILURE", payload: e.message });
  } finally {
    dispatch({ type: "DATA_LOADED" });
  }
};
