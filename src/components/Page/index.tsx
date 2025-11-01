import React from "react";
import { PageProps } from "./types";
import styles from "./Page.module.css";

const Page: React.FC<PageProps> = ({
  title,
  isTitleHidden = false,
  children,
}) => (
  <>
    <h1
      className={`${isTitleHidden && "hgcl-lib-visually-hidden"} ${
        styles.Page_title
      }`}
    >
      {title}
    </h1>
    {children}
  </>
);

export default Page;
