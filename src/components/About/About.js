import React from "react";

import style from "./style.module.css";

export default function About({ children }) {
  return <div className={style.about}>{children}</div>;
}

About.Title = ({ children }) => <h1>{children}</h1>;

About.Paragraph = ({ children }) => <p>{children}</p>;

About.Wrapper = ({ children }) => (
  <div className={style.wrapper}>{children}</div>
);

About.Github = () => (
  <a
    className={style.githubLink}
    href="https:github.com/ilugdev"
    target="_blank"
    rel="noopener noreferrer"
  >
    github
  </a>
);
