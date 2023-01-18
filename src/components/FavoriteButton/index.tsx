import { Link, useNavigate } from "react-router-dom";
import s from "./favoriteButton.module.scss";

export const FavoriteButton = ({ count }: { count?: number }) => {
  let navigate = useNavigate();
  return (
    <Link onClick={() => navigate("/favorites")} to={"/favorites"}>
      <button className={s.button}>
        <p>Favorite game:</p>
        <div className={s.numberContainer}>
          <span className={s.number}>{count}</span>
        </div>
      </button>
    </Link>
  );
};
