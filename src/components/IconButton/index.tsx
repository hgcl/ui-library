import React from "react";
import Link from "next/link";
import { IconButtonProps } from "./types";
import styles from "./IconButton.module.css";

const IconButton: React.FC<IconButtonProps> = ({
  label,
  featherIcon = "moon",
  hideLabel = false,
  href,
  ...props
}) => {
  if (href)
    return (
      <Link href={href} className={styles.Button} {...props}>
        <div className={styles.Button_svgWrapper} aria-hidden="true">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <use href={`../feather-icons-sprite.svg#${featherIcon}`} />
          </svg>{" "}
        </div>
        <span
          className={`${styles.Button_label} ${
            hideLabel ? "visually-hidden" : ""
          }`}
        >
          {label}
        </span>
      </Link>
    );

  return (
    // Based on previous <Link> example
    <button className={styles.Button} {...props}>
      <div className={styles.Button_svgWrapper} aria-hidden="true">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <use href={`../feather-icons-sprite.svg#${featherIcon}`} />
        </svg>
      </div>
      <span
        className={`${styles.Button_label} ${
          hideLabel ? "hgcl-lib-visually-hidden" : ""
        }`}
      >
        {label}
      </span>
    </button>
  );
};

export default IconButton;
