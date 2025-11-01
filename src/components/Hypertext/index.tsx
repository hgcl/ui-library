import React from "react";
import Link from "next/link";
import { HypertextProps } from "./types";
import styles from "./Hypertext.module.css";

const Hypertext: React.FC<HypertextProps> = ({ children, href, ...props }) => (
  <Link href={href} className={styles.Hypertext} {...props}>
    {children}
  </Link>
);

export default Hypertext;
