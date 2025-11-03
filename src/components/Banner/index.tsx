import React from "react";
import { BannerProps } from "./types";
import styles from "./Banner.module.css";

const Banner: React.FC<BannerProps> = ({
  message,
  isDisabled = false,
  ...props
}) => {
  if (isDisabled) {
    return;
  }

  return (
    <section className={styles.Banner} {...props}>
      {message}
    </section>
  );
};

export default Banner;
