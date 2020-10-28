import React from "react";

import style from "./style.module.css";

export default function Layout({ children }) {
  return <div className={style.layout}>{children}</div>;
}

Layout.Pages = ({ children }) => (
  <div className={style.pagesLayout}>{children}</div>
);
