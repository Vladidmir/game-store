import { useEffect, useState, FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "store";

import { Search, Sorting, FavoriteButton } from "../index";
import { ReactComponent as HomePageIcon } from "../../assets/homepage.svg";
import steamLogo from "../../assets/steam_logo.png";

import s from "./header.module.scss";
import { useWindowSize } from "../../hooks/useWindowSize";

//можно було чере флекс ордер або грід еріа зробити адаптацію , але було мало часу і
// я пішов найпростішим способом )

export const Header: FC = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const { totalCount } = useAppSelector((state) => state.gameFavoritesReduser);

  const location = useLocation().pathname;
  let navigate = useNavigate();
  const { width } = useWindowSize();

  useEffect(() => {
    if (width && width < 830) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, [width]);

  return (
    <header className={s.wrapper}>
      {smallScreen ? (
        <>
          <div className={s.top}>
            <a
              target="_blank"
              href="https://store.steampowered.com"
              rel="noreferrer"
            >
              <img src={steamLogo} alt="steam logo" />
            </a>
            {location === "/favorites" ? (
              <Link to="/" onClick={() => navigate("/")}>
                <HomePageIcon className={s.btnHome} />
              </Link>
            ) : (
              <FavoriteButton count={totalCount} />
            )}
          </div>

          <div className={s.bottom}>
            <Search />
            {location !== "/favorites" && (
              <div className={s.sort}>
                <Sorting type="order" />
                <Sorting type="category" />
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <a
            target="_blank"
            href="https://store.steampowered.com"
            rel="noreferrer"
          >
            <img src={steamLogo} alt="steam logo" />
          </a>
          <Search />
          {location !== "/favorites" && (
            <>
              <Sorting type="order" />
              <Sorting type="category" />
            </>
          )}

          {location === "/favorites" ? (
            <Link to="/" onClick={() => navigate("/")}>
              <HomePageIcon className={s.btnHome} />
            </Link>
          ) : (
            <FavoriteButton count={totalCount} />
          )}
        </>
      )}
    </header>
  );
};
