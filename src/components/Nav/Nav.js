import React from "react";
import { Link, useRoute } from "wouter";

import style from "./style.module.css";

const NavItem = ({ path }) => {
  const [match] = useRoute(path);

  return (
    <li className={style.navItem}>
      <Link href={path}>
        <button disabled={match}></button>
      </Link>
    </li>
  );
};

export default function Nav({ routes }) {
  return (
    <ul className={style.nav}>
      {routes.map(({ path }) => (
        <NavItem key={path} path={path} />
      ))}
    </ul>
  );
}
