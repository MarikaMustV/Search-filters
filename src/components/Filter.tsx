import React from "react";
import Checkbox from "./Checkbox";
import { FilterType } from "../typings";

type Props = {
  name: string;
  disabled?: boolean;
  childFilters?: Array<FilterType>;
  onToggle: (filterName: string, parentFilterName?: string) => void;
  isChecked?: boolean;
};

export default function Filter({ name, disabled, childFilters, onToggle, isChecked }: Props) {
  return (
    <React.Fragment>
      <div className="filter">
        <Checkbox
          disabled={disabled || false}
          label={name}
          onChange={() => onToggle(name)}
          isChecked={isChecked || false}
        />
      </div>
      {childFilters && childFilters.length > 0 && (
        <div className="child-filters">
          {childFilters.map((childFilter) => {
            return (
              <Filter
                key={childFilter.name}
                disabled={childFilter.disabled}
                name={childFilter.name}
                onToggle={() => onToggle(childFilter.name, name)}
                isChecked={childFilter.isChecked}
              />
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
}
