export type FilterTagProps = {
  children?: React.ReactNode;
  label: string;
  id: string;
  isChecked: boolean;
  handleFilterChange: React.ChangeEventHandler<HTMLInputElement>;
  groupName?: string;
};
