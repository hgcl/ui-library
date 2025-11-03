import React from "react";
import { BannerProps } from "./types";
import styles from "./Banner.module.css";

const Banner: React.FC<BannerProps> = ({
  children,
  isDisabled = false,
  ...props
}) => {
  if (isDisabled) {
    return;
  }

  return (
    <section className={styles.Banner} {...props}>
      {children}
    </section>
  );
};

export default Banner;
