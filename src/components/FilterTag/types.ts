import { Dispatch, SetStateAction } from "react";

export type FilterTagProps = {
  children?: React.ReactNode;
  label: string;
  id: string;
  isChecked: boolean;
  handleFilterChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    setFilters: Dispatch<SetStateAction<any>>
  ) => void;
  groupName?: string;
};
