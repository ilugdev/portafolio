import React from "react";

import style from "./style.module.css";

export default function About({ children }) {
  return <div className={style.about}>{children}</div>;
}

About.Title = ({ children }) => <h1>{children}</h1>;

About.Paragraph = ({ children }) => <p>{children}</p>;

About.Separator = () => <div className={style.separator}></div>;

About.ExpirienceList = ({ children }) => <ul>{children}</ul>;

About.Expirience = ({ children }) => <li>{children}</li>;
