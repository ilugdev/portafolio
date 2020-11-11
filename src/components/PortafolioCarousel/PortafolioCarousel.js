import React, { useState, useEffect, useRef } from "react";

import PortafolioCard from "../PortafolioCard";

import style from "./style.module.css";

export default function PortafolioCarousel({ portafolios }) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState("right");
  const ele = useRef(null);

  useEffect(() => {
    const changeButtonBehavior = ({ clientX }) => {
      const element = ele.current;

      const middlePos =
        element.getBoundingClientRect().right -
        element.getBoundingClientRect().width / 2;

      if (clientX > middlePos) {
        setDirection("right");
      } else {
        setDirection("left");
      }
    };

    ele.current.addEventListener("mousemove", changeButtonBehavior);

    return () => {
      ele.current.removeEventListener("mousemove", changeButtonBehavior);
    };
  });

  const handlePage = () => {
    if (direction === "right" && page < portafolios.length - 1) {
      setPage((prevPage) => prevPage + 1);
    } else if (direction === "left" && page > 0) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className={style.container}>
      <PortafolioCard data={portafolios[page]} />
      <div ref={ele} onClick={handlePage} className={style.directionContainer}>
        <h1>Click to {direction === "right" ? ">" : "<"}</h1>
      </div>
    </div>
  );
}