import s from "./favoritesPage.module.scss";
import { Pagination, ProductCardList, Header } from "../../index";
import { ErrorMessage } from "../../index";

import { usePagination } from "hooks/usePagination";
import { useAppSelector } from "store";
import { useEffect } from "react";
import { IGameData } from "types/game.interface";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.gameFavoritesReduser);
  const { searchValue } = useAppSelector((state) => state.gameFilterReducer);

  const { currentItems, setCurrentItems, handlePageClick, pageCount } =
    usePagination({
      data: favorites,
    });

  useEffect(() => {
    const localFilterFavorotsByTitle = (data: IGameData[]) => {
      return data.filter((obj) => {
        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
          return true;
        }
        return false;
      });
    };
    setCurrentItems((cuurentItems) => localFilterFavorotsByTitle(cuurentItems));
    if (!searchValue.length) {
      setCurrentItems(favorites);
    }
  }, [favorites, searchValue, setCurrentItems]);

  return (
    <>
      <Header />
      <div className={s.favoritesPage}>
        {favorites.length ? (
          <div className={s.scroll}>
            <div className={s.mainPage}>
              <div className={s.scroll}>
                <ProductCardList data={currentItems} />
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
