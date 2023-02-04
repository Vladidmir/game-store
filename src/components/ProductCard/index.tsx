import { FC, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "store";

import { ReactComponent as LikeFilledIcon } from "../../assets/product/like_filled.svg";
import { ReactComponent as LikeOutlineIcon } from "../../assets/product/like_outline.svg";

import s from "./productCard.module.scss";

import { IGameData } from "types/game.interface";
import { removeFavorite, addFavorite } from "store/slices/gameFaviritesSlice";

export const ProductCard: FC<IGameData> = (game) => {
  const { title, price, appId, imgUrl, released } = game;
  const location = useLocation().pathname;
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(
    (state) => state.gameFavoritesReduser.favorites
  );

  const [isFav, setIsFav] = useState<boolean>(false);

  useEffect(() => {
    if (location === "/") {
      setIsFav(!!favorites.find(({ title: t }) => t === title));
    } else if (location === "/favorites") {
      setIsFav(true);
    }
  }, [favorites, location, title]);

  const toggleFav = () => {
    if (!isFav) {
      dispatch(addFavorite(game));
      setIsFav(true);
    } else {
      dispatch(removeFavorite(appId));
      setIsFav(false);
    }
  };

  const displayedTitle = title.length > 20 ? `${title.slice(0, 20)}...` : title;
  const displayedPrice =
    price.indexOf("€") !== -1
      ? price.slice(0, price.indexOf("€") + 1)
      : "Free to play";

  return (
    <div className={s.card}>
      <div className={s.cardContainer}>
        <img className={s.cardContainerImg} src={imgUrl} alt="thumbnail" />
        <div className={s.cardContainerDesct}>
          <p className={s.title}>{displayedTitle}</p>
          <p className={s.data}>{released}</p>
          <div className={s.action}>
            <p className={s.price}>{displayedPrice}</p>
            <button className={s.like} onClick={toggleFav}>
              {isFav ? <LikeFilledIcon /> : <LikeOutlineIcon />}
            </button>
          </div>
          <div className={s.addInfo}>
            <Link className={s.more} to={`${appId}`}>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
