import { configureStore } from "@reduxjs/toolkit";
import useerReducer from "./features/user/userSlice";
import cartReducer from "./features/cartSlice";

const store = configureStore({
  reducer: {
    user: useerReducer,
    cart: cartReducer,
  },
});

export default store;
