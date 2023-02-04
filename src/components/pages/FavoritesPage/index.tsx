import { useMemo, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "store";

import { Pagination, ProductCardList, Header, ErrorMessage } from "../../index";

import s from "./favoritesPage.module.scss";
import { IGameData } from "types/game.interface";
import { usePagination } from "hooks/usePagination";

export const FavoritesPage = () => {
  const favorites = useAppSelector(
    (state) => state.gameFavoritesReduser.favorites
  );
  const searchValue = useAppSelector(
    (state) => state.gameFilterReducer.searchValue
  );

  const { currentItems, handlePageClick, pageCount } = usePagination({
    data: favorites,
  });

  const currentItemsMemo = useMemo(() => {
    const localFilterFavorotsByTitle = (data: IGameData[]) => {
      return data.filter((obj) => {
        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
          return true;
        }
        return false;
      });
    };
    return searchValue.length
      ? localFilterFavorotsByTitle(currentItems)
      : currentItems;
  }, [currentItems, searchValue]);

  return (
    <>
      <Header />
      <div className={s.favoritesPage}>
        {favorites.length ? (
          <div className={s.scroll}>
            <div className={s.mainPage}>
              <div className={s.scroll}>
                <ProductCardList data={currentItemsMemo} />
              </div>
              <Pagination
                pageCount={pageCount}
                handlePageClick={handlePageClick}
              />
            </div>
          </div>
        ) : (
          <ErrorMessage textError="You have not added any games to your favorites list yet" />
        )}
      </div>
    </>
  );
};
