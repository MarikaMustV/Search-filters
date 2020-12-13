import { combineReducers } from "@reduxjs/toolkit";
import { reducer as filterReducer } from "./filterSlice";
import { reducer as productReducer } from "./productSlice";

export default combineReducers({
  filters: filterReducer,
  products: productReducer,
});
