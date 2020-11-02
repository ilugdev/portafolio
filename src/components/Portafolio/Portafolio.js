import React from "react";

import style from "./style.module.css";

export default function Portafolio({ children }) {
  return <div className={style.portafolioContainer}>{children}</div>;
}

Portafolio.Box = function ({ data }) {
  const { img, title, url, repo_url, tags } = data;

  return (
    <div className={style.portafolio}>
      <input
        className={style.mobileTouch}
        type="checkbox"
        name="mobile_touch"
      />
      <img src={img} alt="project preview" />
      <div className={style.portafolioText}>
        <h1>{title}</h1>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className={style.menu}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          DEMO
        </a>
        <a href={repo_url} target="_blank" rel="noopener noreferrer">
          CODE
        </a>
      </div>
    </div>
  );
};
