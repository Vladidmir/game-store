import { useEffect } from "react";
import {
  Pagination,
  ProductCardList,
  Header,
  ProductCardLoader,
} from "../../index";
import { useAppDispatch, useAppSelector } from "store";
import { fetchGamesByName } from "store/slices/gameSlice/gameAsyncAction";
import { ErrorMessage } from "components/UI/ErrorMesage";
import { NoActionGif } from "components/UI/NoActionGif";
import { usePagination } from "hooks/usePagination";

import s from "./mainPage.module.scss";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { items, status, isFound } = useAppSelector(
    (state) => state.gameReducer
  );
  const { searchValue, categoryName, sortByOrder } = useAppSelector(
    (state) => state.gameFilterReducer
  );

  const { currentItems, handlePageClick, pageCount } = usePagination({
    data: items,
  });

  const errorGif = status === "error" && <ErrorMessage textError="Error 404" />;
  const content = searchValue.length > 0 && status === "success";

  const fakeList = [...new Array(8)].map((_, i) => (
    <ProductCardLoader key={i} />
  ));
  const typingState =
    status === "loading" && searchValue.length > 0 ? (
      <div className={s.fakeList}>{fakeList}</div>
    ) : (
      status !== "error" && <NoActionGif />
    );
  const noGameFound =
    isFound === false && searchValue.length > 1 && status === "success" ? (
      <ErrorMessage textError="Games not found, try another name" />
    ) : (
      ""
    );

  useEffect(() => {
    //на цьому тарифі в API обмеження по 10секунд - 1 запрос.
    //якщо пригати з детальної чторінки до головної - буде помилка 429
    dispatch(fetchGamesByName({ categoryName, searchValue, sortByOrder }));
  }, [dispatch, searchValue, sortByOrder, categoryName]);

  return (
    <>
      <Header />
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
