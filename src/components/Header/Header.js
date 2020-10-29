import React from "react";

import style from "./style.module.css";

const Logo = () => <h1 className={style.logo}>ilugdev</h1>;

export default function Header() {
  return (
    <div className={style.header}>
      <Logo />
    </div>
  );
}
