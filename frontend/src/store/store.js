import { financeReducer } from "../reducers/financeReducer";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(financeReducer, applyMiddleware(thunk));
export default store;
