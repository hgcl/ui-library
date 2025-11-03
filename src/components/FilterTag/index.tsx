import React from "react";
import { FilterTagProps } from "./types";
import styles from "./FilterTag.module.css";
import { Check } from "react-feather";

const FilterTag: React.FC<FilterTagProps> = ({
  label,
  children,
  id,
  isChecked,
  groupName = "category-filters",
  handleFilterChange,
  ...props
}) => (
  <div
    className={`${styles.Filter} ${isChecked ? styles.checked : ""}`}
    {...props}
  >
    <input
      className={styles.Filter_input}
      type="checkbox"
      id={id}
      value={id}
      name={groupName}
      checked={isChecked}
      onChange={handleFilterChange}
    />
    <label htmlFor={id}>{label}</label>
    <span className={styles.Filter_iconWrapper} aria-hidden="true" hidden>
      {children ? children : <Check />}
    </span>
  </div>
);

export default FilterTag;
