import { FC } from "react";

import ReactPaginate from "react-paginate";

import s from "./pagination.module.scss";
interface IPaginationProps {
  pageCount: number;
  handlePageClick: (event: any) => any;
}
export const Pagination: FC<IPaginationProps> = ({
  pageCount,
  handlePageClick,
}) => {
  return (
    <>
      <ReactPaginate
        className={s.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        activeClassName={s.active}
        activeLinkClassName={s.active}
      />
    </>
  );
};
