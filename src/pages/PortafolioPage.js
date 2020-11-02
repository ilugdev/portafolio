import React from "react";

import Portafolio from "components/Portafolio";

import { PORTAFOLIOS } from "constants/portafolios";

export default function PortafolioPage() {
  return (
    <Portafolio>
      {PORTAFOLIOS.map((data) => (
        <Portafolio.Box key={data.title} data={data} />
      ))}
    </Portafolio>
  );
}
