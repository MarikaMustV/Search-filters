import React from "react";
import Category from "../components/Category";
import Filter from "../components/Filter";
import { useSelector, useDispatch } from "react-redux";
import { actions as filterActions } from "../redux/filterSlice";
import { FilterType } from "../typings";

type ColumnProps = {
  categories: Array<{ name: string; filters: Array<FilterType> }>;
  toggleFilter: (categoryName: string, filterName: string, parentFilterName?: string) => void;
};

function Column({ categories, toggleFilter }: ColumnProps) {
  return (
    <div className="column">
      {categories.map((category) => {
        return (
          <Category key={category.name} name={category.name}>
            {category.filters.map((filter) => {
              return (
                <Filter
                  key={filter.name}
                  disabled={filter.disabled}
                  name={filter.name}
                  childFilters={filter.children}
                  onToggle={(filterName, parentFilterName) => toggleFilter(category.name, filterName, parentFilterName)}
                  isChecked={filter.isChecked}
                />
              );
            })}
          </Category>
        );
      })}
    </div>
  );
}

export default function FiltersArea() {
  const { filterCategories } = useSelector((state: any) => state.filters);
  const dispatch = useDispatch();

  const handleFilterToggle = (categoryName: string, filterName: string, parentFilterName?: string) => {
    dispatch(filterActions.toggleFilter({ categoryName, filterName, parentFilterName }));
  };

  return (
    <div className="filters-area">
      <Column categories={filterCategories.slice(0, 2)} toggleFilter={handleFilterToggle} />
      <Column categories={filterCategories.slice(2, 3)} toggleFilter={handleFilterToggle} />
      <Column categories={filterCategories.slice(3, 5)} toggleFilter={handleFilterToggle} />
      <Column categories={filterCategories.slice(5)} toggleFilter={handleFilterToggle} />
    </div>
  );
}
