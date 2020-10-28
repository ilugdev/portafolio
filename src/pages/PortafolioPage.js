import React, { useState } from "react";

import Portafolio from "components/Portafolio";
import PortafolioCarousel from "components/PortafolioCarousel";

const PORTAFOLIOS = [
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
];

const BOX_PER_PAGE = 3;

export default function PortafolioPage() {
  const [page, setPage] = useState(0);

  const handlePage = (page) => {
    setPage(page);
  };

  return (
    <Portafolio>
      <PortafolioCarousel
        portafolios={PORTAFOLIOS}
        boxPerPage={BOX_PER_PAGE}
        page={page}
        Box={Portafolio.Box}
      />
      <Portafolio.NavContainer>
        {Array(Math.ceil(PORTAFOLIOS.length / BOX_PER_PAGE))
          .fill("")
          .map((_, i) => (
            <PortafolioCarousel.Button
              key={i}
              page={i}
              handlePage={handlePage}
              active={page === i}
            />
          ))}
      </Portafolio.NavContainer>
    </Portafolio>
  );
}
