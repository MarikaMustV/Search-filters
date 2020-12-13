import { createSlice } from "@reduxjs/toolkit";
import filters from "../data/filters";

const { reducer, actions } = createSlice({
  name: "filters",
  initialState: {
    filterCategories: filters,
  },
  reducers: {
    toggleFilter(state, { payload }) {
      const category = state.filterCategories.find((category) => category.name === payload.categoryName);
      if (!category) return;

      let filter;
      if (payload.parentFilterName) {
        const parentFilter = category.filters.find((filter) => filter.name === payload.parentFilterName);

        if (!parentFilter || !parentFilter.children) return;
        
        filter = parentFilter.children.find((filter) => filter.name === payload.filterName);
      } else {
        filter = category.filters.find((filter) => filter.name === payload.filterName);
      }

      if (filter) {
        filter.isChecked = !filter.isChecked;
      }
    },
    clearFilters(state) {
      state.filterCategories.forEach((category) => {
        category.filters.forEach((filter) => {
          if (filter.isChecked) filter.isChecked = false;
          if (filter.children) {
            filter.children.forEach((childFilter) => {
              if (childFilter.isChecked) {
                childFilter.isChecked = false;
              }
            });
          }
        });
      });
    },
  },
});

export { reducer, actions };
