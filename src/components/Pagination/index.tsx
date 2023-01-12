import React, { FC } from "react";
import ReactPaginate from "react-paginate";

import s from "./pagination.module.scss";

type PaginationProps = {
  onChangePage: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      activeClassName={s.active}
    />
  );
};
