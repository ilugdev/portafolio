import React from "react";

import style from "./style.module.css";

export default function Portafolio({ children }) {
  return <div className={style.portafolioContainer}>{children}</div>;
}

Portafolio.Box = function ({ data }) {
  const { img, title, tags } = data;

  return (
    <div className={style.portafolio}>
      <img src={img} alt="project preview" />
      <div className={style.portafolioText}>
        <h1>{title}</h1>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Portafolio.NavContainer = function ({ children }) {
  return <div className={style.navContainer}>{children}</div>;
};
