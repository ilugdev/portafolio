import React from "react";

import style from "./style.module.css";

export default function Portafolio({ children }) {
  return <div className={style.portafolioContainer}>{children}</div>;
}

Portafolio.Box = function ({ data, position }) {
  const { img, title, tags } = data;

  return (
    <div className={style.portafolio} style={{ left: position }}>
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

Portafolio.Message = function ({ text }) {
  return <h1 className={style.portafolioMessage}>{text}</h1>;
};
