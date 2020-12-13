import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import queryString from "query-string";
import { FilterType } from "../typings";

const fetchProducts = createAsyncThunk("product/fetchProducts", async (_, { getState }) => {
  // @ts-ignore
  const { filterCategories } = getState().filters as {
    filterCategories: Array<{
      name: string;
      filters: Array<FilterType>;
    }>;
  };
  const query: Record<string, any> = {};

  filterCategories.forEach((category) => {
    category.filters.forEach((filter) => {
      if (filter.isChecked) {
        if (!query[category.name]) {
          query[category.name] = [];
        }
        query[category.name].push(filter.name);
      }
      if (filter.children) {
        filter.children.forEach((childFilter) => {
          if (childFilter.isChecked) {
            if (!query[category.name]) {
              query[category.name] = [];
            }
            query[category.name].push(childFilter.name);
          }
        });
      }
    });
  });

  const result = await fetch(`/formats?${queryString.stringify(query, { arrayFormat: "comma" })}`).then((res) =>
    res.json()
  );
  return result;
});

const { reducer, actions } = createSlice({
  name: "products",
  initialState: {
    result: null,
    status: "initial",
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled.type]: (state, { payload }) => {
      state.result = payload;
      state.status = "fulfilled";
    },
    [fetchProducts.pending.type]: (state) => {
      state.status = "pending";
    },
    [fetchProducts.rejected.type]: (state) => {
      console.error("Action rejected:", state);
      state.status = "rejected";
    },
  },
});

export { reducer, actions, fetchProducts };
