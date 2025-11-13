import React from "react";
import Link from "next/link";
import { IconButtonProps } from "./types";
import styles from "./IconButton.module.css";
import { Moon } from "react-feather";

const IconButton: React.FC<IconButtonProps> = ({
  label,
  children,
  hideLabel = false,
  href,
  ...props
}) => {
  if (href)
    return (
      <Link href={href} className={styles.IconButton} {...props}>
        <div className={styles.IconButton__svgWrapper} aria-hidden="true">
          {children ? children : <Moon />}
        </div>
        <span
          className={`${styles.IconButton__label} ${
            hideLabel ? "visually-hidden" : ""
          }`}
        >
          {label}
        </span>
      </Link>
    );

  return (
    // Based on previous <Link> example
    <button className={styles.IconButton} {...props}>
      <div className={styles.IconButton__svgWrapper} aria-hidden="true">
        {children ? children : <Moon />}
      </div>
      <span
        className={`${styles.IconButton__label} ${
          hideLabel ? "visually-hidden" : ""
        }`}
      >
        {label}
      </span>
    </button>
  );
};

export default IconButton;
