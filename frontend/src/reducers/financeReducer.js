const initialState = {
  loading: false,
  error: null,
  incomes: [],
  expenses: [],
  savings: [],
};

export const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_LOADING": {
      return { ...state, loading: true };
    }
    case "DATA_LOADED": {
      return { ...state, loading: false };
    }
    case "ADD_INCOME_SUCCESS": {
      return {
        ...state,
        loading: false,
        incomes: [...state.incomes, action.payload],
      };
    }
    case "ADD_INCOME_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    case "GET_INCOME_SUCCESS": {
      return { ...state, loading: false, incomes: action.payload };
    }
    case "GET_INCOME_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    case "SET_EXPENSE_DATA": {
      return { ...state, expenses: action.payload };
    }
    case "ADD_EXPENSE_SUCCESS": {
      return {
        ...state,
        loading: false,
        expenses: [...state.expenses, action.payload],
      };
    }
    case "ADD_EXPENSE_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    case "GET_EXPENSE_SUCCESS": {
      return { ...state, loading: false, expenses: action.payload };
    }
    case "GET_EXPENSE_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    case "ADD_SAVING_SUCCESS": {
      return {
        ...state,
        loading: false,
        savings: [...state.savings, action.payload],
      };
    }
    case "ADD_SAVING_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    case "GET_SAVING_SUCCESS": {
      return { ...state, loading: false, savings: action.payload };
    }
    case "GET_SAVING_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};
