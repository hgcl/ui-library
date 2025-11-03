import React from "react";
import { FilterTagProps } from "./types";
import styles from "./FilterTag.module.css";

const FilterTag: React.FC<FilterTagProps> = ({
  children,
  id,
  value,
  selectedCategories,
  isChecked,
  handleFilterChange,
  ...props
}) => {
  const PATH_ICON_SPRITE = "../feather-icons-sprite.svg";

  return (
    <div
      className={`${styles.Pill} ${isChecked ? styles.checked : ""}`}
      {...props}
    >
      <input
        className={styles.Pill_input}
        type="checkbox"
        id={id}
        name="category"
        value={value}
        checked={isChecked}
        onChange={handleFilterChange}
      />
      <label htmlFor={value}>{children}</label>
      <span className={styles.Pill_iconWrapper} aria-hidden="true" hidden>
        <svg
          className={styles.Pill_icon}
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <use href={`${PATH_ICON_SPRITE}#check`} />
        </svg>{" "}
      </span>
    </div>
  );
};

export default FilterTag;
