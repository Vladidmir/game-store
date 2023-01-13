import { useState, useEffect } from "react";
import { useAppDispatch } from "store";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

import s from "./search.module.scss";

import useDebounce from "hooks/useDebounce";
import { setSearchValue } from "store/slices/gameFilterSlice";

export const Search = () => {
  const [liveValue, setLiveValue] = useState("");
  const dispatch = useAppDispatch();

  const debouncedValue = useDebounce<string>(liveValue, 500);

  const onChangeInput = (str: string) => {
    setLiveValue(str);
  };

  useEffect(() => {
    dispatch(setSearchValue(liveValue));
  }, [debouncedValue]);

  return (
    <div className={s.inputContainer}>
      <input
        name="search"
        onChange={(e) => onChangeInput(e.target.value)}
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
