import { useEffect } from "react";
import {
  Pagination,
  ProductCardList,
  Header,
  ProductCardLoader,
} from "../../index";
import { useAppDispatch, useAppSelector } from "store";

import s from "./mainPage.module.scss";

import { fetchGamesByName } from "store/slices/gameSlice/gameAsyncAction";
import { ErrorMessage } from "components/ErrorMesage";
import { NoActionGif } from "components/NoActionGif";

import { usePagination } from "hooks/usePagination";

export const MainPage = () => {
  const dispatch = useAppDispatch();

  const { items, status, isFound } = useAppSelector(
    (state) => state.gameReducer
  );
  const { searchValue } = useAppSelector((state) => state.gameFilterReducer);
  const { currentItems, handlePageClick, pageCount } = usePagination({
    data: items,
  });

  const noAction = status === "idle" && <NoActionGif />;
  const errorGif =
    status === "error" ? <ErrorMessage textError="Error 404" /> : "";
  const content = searchValue.length > 0 && status === "success";

  const fakeList = [...new Array(8)].map((_, i) => (
    <ProductCardLoader key={i} />
  ));
  const typingState =
    searchValue.length > 0 ? (
      // <div className={s.fakeList}>{fakeList}</div>
      fakeList
    ) : (
      <NoActionGif />
    );
  const noGameFound =
    isFound === false && searchValue.length > 1 && status !== "loading" ? (
      <ErrorMessage textError="Games not found, try another name" />
    ) : (
      ""
    );

  useEffect(() => {
    dispatch(fetchGamesByName(searchValue));
  }, [searchValue, dispatch]);

  return (
    <>
      <Header pageName="mainPage" />
      {noAction}
      {errorGif}
      {noGameFound}
      {content ? (
        <>
          <div className={s.mainPage}>
            <div className={s.scroll}>
              <ProductCardList data={currentItems} />
            </div>
          </div>
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </>
      ) : (
        typingState
      )}
    </>
  );
};
