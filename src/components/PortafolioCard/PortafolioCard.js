import React from "react";

import style from "./style.module.css";

export default function PortafolioCard({ data }) {
  const { img, title, url, repo_url, tags } = data;

  return (
    <div className={style.portafolio}>
      <img src={img} alt="project preview" />
      <div className={style.container}>
        <div className={style.portafolioText}>
          <h1>{title}</h1>
          <div className={style.info}>
            <ul className={style.techs}>
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.projectsLinks}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            demo
          </a>
          <a href={repo_url} target="_blank" rel="noopener noreferrer">
            code
          </a>
        </div>
      </div>
    </div>
  );
}
