import React from "react";
import { PageProps } from "./types";

const Page: React.FC<PageProps> = ({ title, hideTitle = false, children }) => (
  <>
    <h1 className={`${hideTitle ? "visually-hidden" : ""}`}>{title}</h1>
    {children}
  </>
);

export default Page;
