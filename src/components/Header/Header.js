import React from "react";

import Nav from "components/Nav";

import style from "./style.module.css";

const Logo = () => <h1 className={style.logo}>ilugdev</h1>;

const GithubLink = () => (
  <a
    className={style.githubLink}
    href="https:github.com/ilugdev"
    target="_blank"
    rel="noopener noreferrer"
  >
    github
  </a>
);

export default function Header({ routes }) {
  return (
    <div className={style.header}>
      <Logo />
      <Nav routes={routes} />
      <GithubLink />
    </div>
  );
}
