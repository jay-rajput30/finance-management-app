const initialState = {
  loading: false,
  error: null,
  incomes: [],
  expense: [],
  saving: [],
};

export const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_LOADING": {
      return { ...state, loading: true };
    }
    case "ADD_INCOME_SUCCESS": {
      return { ...state, loading: false, income: action.payload };
    }
    case "ADD_INCOME_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    case "ADD_EXPENSE_SUCCESS": {
      return { ...state, loading: false, expense: action.payload };
    }
    case "ADD_EXPENSE_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    case "ADD_SAVING_SUCCESS": {
      return { ...state, loading: false, saving: action.payload };
    }
    case "ADD_SAVING_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};
