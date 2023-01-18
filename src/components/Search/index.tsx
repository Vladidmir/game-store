import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "store";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { useAppSelector } from "store";

import s from "./search.module.scss";

import useDebounce from "hooks/useDebounce";
import { setSearchValue } from "store/slices/gameFilterSlice";
import { useLocation } from "react-router";

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
        <SearchIcon className={s.searchIcon} />
      </label>
    </div>
  );
};
