import { useState, useEffect, ChangeEvent } from "react";
import { useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "store";

import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as EraserIcon } from "../../assets/eraser.svg";

import s from "./search.module.scss";

import useDebounce from "hooks/useDebounce";
import { setSearchValue } from "store/slices/gameFilterSlice";

export const Search = () => {
  const { searchValue } = useAppSelector((state) => state.gameFilterReducer);
  const [liveValue, setLiveValue] = useState(searchValue || "");
  const isFavorites = useLocation().pathname === "/favorites";

  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce<string>(liveValue, isFavorites ? 0 : 500);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLiveValue(e.target.value);
  };

  useEffect(() => {
    if (isFavorites) {
      setLiveValue("");
    }
  }, []);

  useEffect(() => {
    dispatch(setSearchValue(liveValue));
  }, [debouncedValue, dispatch]);

  return (
    <div className={s.inputContainer}>
      <input
        name="search"
        onChange={(e) => onChangeInput(e)}
        className={s.input}
        value={liveValue}
        placeholder="Enter an app name..."
      />

      <label htmlFor="search">
        {searchValue ? (
          <EraserIcon
            onClick={() => setLiveValue("")}
            className={s.searchIcon}
          />
        ) : (
          <SearchIcon className={s.searchIcon} />
        )}
      </label>
    </div>
  );
};
