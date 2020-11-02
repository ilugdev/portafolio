import React from "react";

import AnimatedRoute from "components/AnimatedRoute";

import { ROUTES } from "constants/routes";

export default function RenderRoutes() {
  return (
    <>
      {ROUTES.map(({ path, Component }) => (
        <AnimatedRoute key={path} path={path} Component={Component} />
      ))}
    </>
  );
}
