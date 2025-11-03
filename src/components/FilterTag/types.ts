export type FilterTagProps = {
  children: React.ReactSVGElement;
  label: string;
  id: string;
  isChecked: boolean;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  groupName?: string;
};
