export type FilterType = {
    name: string,
    children?: Array<FilterType>,
    disabled?: boolean,
    isChecked?: boolean
  };