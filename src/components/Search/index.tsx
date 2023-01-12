import { useState, FC, CSSProperties } from "react";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import classNames from "classnames";

import s from "./search.module.scss";

interface ISearch {
  extraStyle?: CSSProperties;
}

export const Search: FC<ISearch> = ({ extraStyle }) => {
  const [liveValue, setLiveValue] = useState("");

  const onChangeInput = (str: string) => {
    setLiveValue(str);
  };

  return (
    <div className={classNames(s.inputContainer, { extraStyle: extraStyle })}>
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
