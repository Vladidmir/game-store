import { useState, useRef, FC } from "react";

import { ReactComponent as ArrowIcon } from "../../../assets/sort/arrow.svg";

import cn from "classnames";
import s from "./categoryBurger.module.scss";

import useOnClickOutside from "../../../hooks/useOnClickOutside";

import { CategoryEnum, TCategoryData } from "types/gamesSorting.types";

interface ICategoryBurger {
  categories: TCategoryData[];
  currentCategory: CategoryEnum;
  onChangeCategory: (selectedCategory: CategoryEnum) => void;
}

export const CategoryBurger: FC<ICategoryBurger> = ({
  categories,
  currentCategory,
  onChangeCategory,
}) => {
  const [items] = useState(categories);
  const [isVisible, setVisibility] = useState(false);
  const burgerRef = useRef(null);

  useOnClickOutside(burgerRef, () => setVisibility(false));

  const toggleDropdown = () => setVisibility(!isVisible);

  const handleItemClick = (item: TCategoryData) => {
    onChangeCategory(item.label);
    setTimeout(() => {
      toggleDropdown();
    }, 200);
  };

  return (
    <div onClick={toggleDropdown} ref={burgerRef} className={s.dropdown}>
      <p className={s.dropdownHeader}>{currentCategory}</p>
      <ArrowIcon
        className={cn({
          [s.dropdownIconOpen]: isVisible,
        })}
      />
      <div
        className={cn(s.dropdownBody, {
          [s.dropdownOpen]: isVisible,
        })}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={s.dropdownItem}
            onClick={() => handleItemClick(item)}
          >
            <p
              className={cn(s.dropdownItemIcon, {
                [s.dropdownItemSelectedText]: item.label === currentCategory,
              })}
            >
              {item.label}
            </p>

            <item.Icon
              className={cn(s.dropdownItemIcon, {
                [s.dropdownItemIconSelected]: item.label === currentCategory,
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
