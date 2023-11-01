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
    case "DATA_LOADED": {
      return { ...state, loading: false };
    }
    case "ADD_INCOME_SUCCESS": {
      return {
        ...state,
        loading: false,
        income: [...state.income, action.payload],
      };
    }
    case "ADD_INCOME_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    case "GET_INCOME_SUCCESS": {
      return { ...state, loading: false, income: action.payload };
    }
    case "GET_INCOME_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    case "ADD_EXPENSE_SUCCESS": {
      return {
        ...state,
        loading: false,
        expense: [...state.expense, action.payload],
      };
    }
    case "ADD_EXPENSE_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    case "GET_EXPENSE_SUCCESS": {
      return { ...state, loading: false, expense: action.payload };
    }
    case "GET_EXPENSE_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    case "ADD_SAVING_SUCCESS": {
      return {
        ...state,
        loading: false,
        saving: [...state.saving, action.payload],
      };
    }
    case "ADD_SAVING_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    case "GET_SAVING_SUCCESS": {
      return { ...state, loading: false, saving: action.payload };
    }
    case "GET_SAVING_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};
