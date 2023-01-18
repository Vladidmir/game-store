import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "store";

import { ReactComponent as LikeFilledIcon } from "../../assets/product/like_filled.svg";
import { ReactComponent as LikeOutlineIcon } from "../../assets/product/like_outline.svg";
import s from "./productCard.module.scss";

import { IGameData } from "types/game.interface";

import { removeFavorite, addFavorite } from "store/slices/gameFaviritesSlice";

export const ProductCard: FC<IGameData> = (game) => {
  const location = useLocation().pathname;
  const dispatch = useAppDispatch();

  const { favorites } = useAppSelector((state) => state.gameFavoritesReduser);

  const [isFav, setIsFav] = useState<boolean>(false);

  const addToFavouite = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!favorites.includes(game)) {
      dispatch(addFavorite(game));
      setIsFav(true);
    }
  };

  const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(removeFavorite(game.appId));
    setIsFav(false);
  };

  useEffect(() => {
    if (location === "/") {
      if (!!favorites.find(({ title }) => title === game.title)) {
        setIsFav(true);
      }
    }
    if (location === "/favorites") {
      setIsFav(true);
    }
  }, [favorites, game, location]);

  return (
    <div className={s.card}>
      <div className={s.cardContainer}>
        <img className={s.cardContainerImg} src={game.imgUrl} alt="thumbnail" />
        <div className={s.cardContainerDesct}>
          <p className={s.title}>
            {game.title.length > 20
              ? `${game.title.slice(0, 20)}...`
              : game.title}
          </p>
          <p className={s.data}>{game.released}</p>
          <div className={s.action}>
            <p className={s.price}>{game.price}</p>
            <button
              className={s.like}
              onClick={isFav ? removeFromFavorite : addToFavouite}
            >
              {isFav === true ? <LikeFilledIcon /> : <LikeOutlineIcon />}
            </button>
          </div>

          <div className={s.addInfo}>
            <Link className={s.more} to={`${game.appId}`}>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
