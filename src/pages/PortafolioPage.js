import React, { useState, useEffect } from "react";

import Portafolio from "components/Portafolio";

const PORTAFOLIO = [
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ejemplo_de_un_componente_de_React.png/800px-Ejemplo_de_un_componente_de_React.png",
    title: "work 1",
    tags: ["react", "tailwind.css", "react-hook-forms"],
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ejemplo_de_un_componente_de_React.png/800px-Ejemplo_de_un_componente_de_React.png",
    title: "work 2",
    tags: ["react", "tailwind.css", "react-hook-forms"],
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ejemplo_de_un_componente_de_React.png/800px-Ejemplo_de_un_componente_de_React.png",
    title: "work 3",
    tags: ["react", "tailwind.css", "react-hook-forms"],
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ejemplo_de_un_componente_de_React.png/800px-Ejemplo_de_un_componente_de_React.png",
    title: "work 4",
    tags: ["react", "tailwind.css", "react-hook-forms"],
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ejemplo_de_un_componente_de_React.png/800px-Ejemplo_de_un_componente_de_React.png",
    title: "work 5",
    tags: ["react", "tailwind.css", "react-hook-forms"],
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ejemplo_de_un_componente_de_React.png/800px-Ejemplo_de_un_componente_de_React.png",
    title: "work 6",
    tags: ["react", "tailwind.css", "react-hook-forms"],
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ejemplo_de_un_componente_de_React.png/800px-Ejemplo_de_un_componente_de_React.png",
    title: "work 7",
    tags: ["react", "tailwind.css", "react-hook-forms"],
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ejemplo_de_un_componente_de_React.png/800px-Ejemplo_de_un_componente_de_React.png",
    title: "work 8",
    tags: ["react", "tailwind.css", "react-hook-forms"],
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ejemplo_de_un_componente_de_React.png/800px-Ejemplo_de_un_componente_de_React.png",
    title: "work 9",
    tags: ["react", "tailwind.css", "react-hook-forms"],
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ejemplo_de_un_componente_de_React.png/800px-Ejemplo_de_un_componente_de_React.png",
    title: "work 10",
    tags: ["react", "tailwind.css", "react-hook-forms"],
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ejemplo_de_un_componente_de_React.png/800px-Ejemplo_de_un_componente_de_React.png",
    title: "work 11",
    tags: ["react", "tailwind.css", "react-hook-forms"],
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ejemplo_de_un_componente_de_React.png/800px-Ejemplo_de_un_componente_de_React.png",
    title: "work 12",
    tags: ["react", "tailwind.css", "react-hook-forms"],
  },
];

const BODY = document.querySelector("body");

export default function PortafolioPage() {
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const middleScreen = BODY.clientWidth / 2;

    const mousePos = ({ screenX }) => {
      setDirection(screenX - middleScreen);
    };

    BODY.addEventListener("mousemove", mousePos);

    return () => {
      BODY.removeEventListener("mousemove", mousePos);
    };
  }, []);

  return (
    <Portafolio>
      <Portafolio.Message text="Think, Code. LOVE." />
      {PORTAFOLIO.map((data, index) => (
        <Portafolio.Box
          key={data.title}
          data={data}
          position={`${
            333 * index - BODY.clientWidth - direction * PORTAFOLIO.length
          }px`}
        />
      ))}
    </Portafolio>
  );
}
