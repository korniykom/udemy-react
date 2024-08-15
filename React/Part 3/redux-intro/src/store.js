import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = createStore(rootReducer);

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export default store;
