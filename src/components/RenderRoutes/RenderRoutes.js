import React from "react";

import AnimatedRoute from "components/AnimatedRoute";

export default function RenderRoutes({ routes }) {
  return (
    <>
      {routes.map(({ path, Component }) => (
        <AnimatedRoute key={path} path={path} Component={Component} />
      ))}
    </>
  );
}
