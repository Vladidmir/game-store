import { useState, FC, useEffect } from "react";
import { IGameData } from "types/game.interface";
interface IUsePagination {
  data: IGameData[];
}
export const usePagination = ({ data }: IUsePagination) => {
  const [currentItems, setCurrentItems] = useState<IGameData[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  return {
    handlePageClick,
    pageCount,
    currentItems,
    setCurrentItems,
  };
};
