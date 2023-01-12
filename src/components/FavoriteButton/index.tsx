import { Link, useNavigate } from "react-router-dom";
import s from "./favoriteButton.module.scss";
export const FavoriteButton = () => {
  let navigate = useNavigate();
  return (
    <Link onClick={() => navigate("/favorites")} to={"/favorites"}>
      <button className={s.button}>
        <p>Favorite game:</p>
        <div className={s.numberContainer}>
          <span className={s.number}>0</span>
        </div>
      </button>
    </Link>
  );
};
