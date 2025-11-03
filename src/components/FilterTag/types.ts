export type FilterTagProps = {
  children?: React.ReactNode;
  label: string;
  id: string;
  isChecked: boolean;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  groupName?: string;
};
