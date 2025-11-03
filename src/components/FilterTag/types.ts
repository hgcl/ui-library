export type FilterTagProps = {
  children: React.ReactNode;
  id: string;
  value: string;
  selectedCategories: Set<string>;
  isChecked: boolean;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
