import React from "react";
import Link from "next/link";
import { ButtonProps } from "./types";
import styles from "./Button.module.css";

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "secondary",
  isDisabled = false,
  onClick,
  ...props
}) => {
  if (href)
    return (
      <Link
        href={href}
        className={`${styles.Button} ${styles[variant]}`}
        {...props}
      >
        {children}
      </Link>
    );

  return (
    // Based on previous <Link> example
    <button
      className={`${styles.Button} ${styles[variant]}`}
      onClick={() => onClick && onClick()}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
