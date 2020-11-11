import React from "react";

import PortafolioCarousel from "components/PortafolioCarousel";

import { PORTAFOLIOS } from "constants/portafolios";

export default function PortafolioPage() {
  return <PortafolioCarousel portafolios={PORTAFOLIOS} />;
}
