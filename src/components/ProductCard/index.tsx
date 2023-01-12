import { ReactComponent as LikeFilledIcon } from "../../assets/product/like_filled.svg";
import { ReactComponent as LikeOutlineIcon } from "../../assets/product/like_outline.svg";
import s from "./productCard.module.scss";
import thumbnail from "../../assets/product/thumbnail.jpg";

export const ProductCard = () => {
  return (
    <div className={s.card}>
      <div className={s.cardContainer}>
        <img className={s.cardContainerImg} src={thumbnail} alt="thumbnail" />
        <div className={s.cardContainerDesct}>
          <p className={s.title}>Counter-Strike: Global Offensive</p>
          <p className={s.data}>21 Aug, 2012</p>
          <div className={s.action}>
            <p className={s.price}>8,19€</p>
            <div className={s.like}>
              <LikeOutlineIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
