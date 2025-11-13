import React from "react";
import Link from "next/link";
import { SkipToContentProps } from "./types";
import styles from "./SkipToContent.module.css";

const SkipToContent: React.FC<SkipToContentProps> = ({
  href,
  showArrow = true,
  children,
}) => (
  <Link className={styles.SkipToContent} href={href}>
    {children ? children : `Skip to content`}
    {showArrow ? <span aria-hidden="true"> ↓</span> : ""}
  </Link>
);
export default SkipToContent;
