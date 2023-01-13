import { FC } from "react";

import { ReactComponent as LikeFilledIcon } from "../../assets/product/like_filled.svg";
import { ReactComponent as LikeOutlineIcon } from "../../assets/product/like_outline.svg";
import s from "./productCard.module.scss";

import { IGameData } from "types/game.interface";

export const ProductCard: FC<IGameData> = ({
  imgUrl,
  price,
  released,
  title,
}) => {
  return (
    <div className={s.card}>
      <div className={s.cardContainer}>
        <img className={s.cardContainerImg} src={imgUrl} alt="thumbnail" />
        <div className={s.cardContainerDesct}>
          <p className={s.title}>{title}</p>
          <p className={s.data}>{released}</p>
          <div className={s.action}>
            <p className={s.price}>{price}</p>
            <div className={s.like}>
              <LikeOutlineIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
