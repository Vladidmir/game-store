import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useAppSelector, useAppDispatch } from "store";

import { ReactComponent as LikeFilledIcon } from "../../assets/product/like_filled.svg";
import { ReactComponent as LikeOutlineIcon } from "../../assets/product/like_outline.svg";
import s from "./productCard.module.scss";

import { IGameData } from "types/game.interface";
import { removeFavorite, addFavorite } from "store/slices/gameFaviritesSlice";

export const ProductCard: FC<IGameData> = (game) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.gameFavoritesReduser);
  const [isFav, setIsFav] = useState<boolean>(false);
  const addToFavouite = () => {
    !favorites.includes(game) && dispatch(addFavorite(game)) && setIsFav(true);
  };

  const removeFromFavorite = () => {
    dispatch(removeFavorite(game.appId));
    setIsFav(false);
  };

  useEffect(() => {
    if (pathname === "/") {
      setIsFav(!!favorites.find(({ title }) => title === game.title));
    }
    if (pathname === "/favorites") {
      setIsFav(true);
    }
  }, [favorites, game, pathname]);

  const price =
    game.price.indexOf("€") > -1
      ? game.price.slice(0, game.price.indexOf("€") + 1)
      : "Free to play";

  return (
    <div className={s.card}>
      {game && (
        <div className={s.cardContainer}>
          <img
            className={s.cardContainerImg}
            src={game.imgUrl}
            alt="thumbnail"
          />
          <div className={s.cardContainerDesct}>
            <p className={s.title}>
              {game.title.length > 20
                ? `${game.title.slice(0, 20)}...`
                : game.title}
            </p>
            <p className={s.data}>{game.released}</p>
            <div className={s.action}>
              <p className={s.price}>{price}</p>
              <button
                className={s.like}
                onClick={isFav ? removeFromFavorite : addToFavouite}
              >
                {isFav ? <LikeFilledIcon /> : <LikeOutlineIcon />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
