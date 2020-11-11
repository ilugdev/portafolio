import React from "react";
import { Route } from "wouter";

import { ROUTES } from "constants/routes";

export default function RenderRoutes() {
  return (
    <>
      {ROUTES.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} />
      ))}
    </>
  );
}
