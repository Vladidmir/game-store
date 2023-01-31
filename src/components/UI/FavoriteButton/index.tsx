import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "store";
import s from "./favoriteButton.module.scss";

export const FavoriteButton = () => {
  const { totalCount } = useAppSelector((state) => state.gameFavoritesReduser);
  let navigate = useNavigate();
  return (
    <Link
      style={{ margin: "0 5px" }}
      onClick={() => navigate("/favorites")}
      to={"/favorites"}
    >
      <button className={s.button}>
        <p>Favorite game:</p>
        <div className={s.numberContainer}>
          <span className={s.number}>{totalCount}</span>
        </div>
      </button>
    </Link>
  );
};
