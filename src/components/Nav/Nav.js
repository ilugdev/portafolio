import React from "react";
import { Link, useRoute } from "wouter";

import style from "./style.module.css";

const route1 = "/";
const route2 = "/portafolio";

export default function Nav() {
  const [match] = useRoute(route1);

  return (
    <Link href={match ? route2 : route1}>
      <button className={style.nav}></button>
    </Link>
  );
}
