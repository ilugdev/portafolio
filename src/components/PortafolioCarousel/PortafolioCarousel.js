import React from "react";

import style from "./style.module.css";

export default function PortafolioCarousel({
  portafolios,
  boxPerPage,
  page,
  Box,
}) {
  const renderBy = (index) => {
    //render if between start index end of page
    return page * boxPerPage <= index && index < (page + 1) * boxPerPage
      ? true
      : false;
  };

  return (
    <div className={style.carouselContainer}>
      {portafolios.map((data, index) =>
        renderBy(index) ? (
          <Box key={data.title} data={data} showing={true} />
        ) : null
      )}
    </div>
  );
}

PortafolioCarousel.Button = function ({ page, handlePage, active }) {
  return (
    <button
      disabled={active}
      className={style.pagination}
      onClick={() => handlePage(page)}
    ></button>
  );
};
