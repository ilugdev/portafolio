import React from "react";
import { Route, useRoute } from "wouter";

import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0.3,
  transform: "scale(0.9)",
};

const transitionStyles = {
  entering: {
    opacity: 0.3,
    transform: "scale(0.9)",
  },
  entered: {
    opacity: 1,
    transform: "scale(1)",
  },
};

export default function AnimatedRoute({ path, Component }) {
  const [match] = useRoute(path);

  return (
    <Transition in={match} timeout={duration}>
      {(state) => (
        <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
          <Route key={path} path={path} component={Component} />
        </div>
      )}
    </Transition>
  );
}
