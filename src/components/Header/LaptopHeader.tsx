import { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Search, FavoriteButton, Sorting } from "../index";
import { ReactComponent as HomePageIcon } from "../../assets/homepage.svg";
import steamLogo from "../../assets/steam_logo.png";

import s from "./header.module.scss";

export const LaptopHeader: FC = () => {
  const location = useLocation().pathname;
  let navigate = useNavigate();

  return (
    <>
      <a target="_blank" href="https://store.steampowered.com" rel="noreferrer">
        <img className={s.steamLogo} src={steamLogo} alt="steam logo" />
      </a>
      <Search />
      {location !== "/favorites" && (
        <>
          <Sorting />
        </>
      )}

      {location === "/favorites" ? (
        <Link to="/" onClick={() => navigate("/")}>
          <HomePageIcon className={s.btnHome} />
        </Link>
      ) : (
        <FavoriteButton />
      )}
    </>
  );
};
