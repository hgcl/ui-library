import React from "react";
import Link from "next/link";
import { ButtonProps } from "./types";
import styles from "./Button.module.css";

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  type = "secondary",
  onClick,
  disabled = false,
  ...props
}) => {
  if (href)
    return (
      <Link
        href={href}
        className={`${styles.Button} ${styles[type]}`}
        {...props}
      >
        {children}
      </Link>
    );

  return (
    // Based on previous <Link> example
    <button
      className={`${styles.Button} ${styles[type]}`}
      onClick={() => onClick && onClick()}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
