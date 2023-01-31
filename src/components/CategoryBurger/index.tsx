import { useState, FC, useRef, SVGProps } from "react";
import { useAppDispatch, useAppSelector } from "store";

import { ReactComponent as ArrowIcon } from "../../assets/sort/arrow.svg";
import { ReactComponent as CalendarIcon } from "../../assets/sort/calendar.svg";
import { ReactComponent as PricetagIcon } from "../../assets/sort/pricetags.svg";

import useOnClickOutside from "../../hooks/useOnClickOutside";
import { CategoryEnum } from "store/slices/gameFilterSlice/gameFilterTypes";
import { setCategoryValue } from "store/slices/gameFilterSlice";

import cn from "classnames";
import s from "./categoryBurger.module.scss";
export type TCategoryData = {
  id: number;
  label: CategoryEnum;
  Icon: FC<SVGProps<SVGSVGElement>>;
};
// краще б написав два окремих компоненти,ніж один універсальний і важко читаємий, але вже пізно відступати :D

export const CategoryBurger = () => {
  const dispatch = useAppDispatch();
  const { categoryName } = useAppSelector((state) => state.gameFilterReducer);

  const categoryData: TCategoryData[] = [
    {
      id: 0,
      label: CategoryEnum.GAME_RELEASE,
      Icon: PricetagIcon,
    },
    {
      id: 1,
      label: CategoryEnum.GAME_PRICE,
      Icon: CalendarIcon,
    },
  ];

  const [items] = useState<TCategoryData[]>(categoryData);
  const [selectedItem, setSelectedItem] = useState(0);
  const [isVisible, setVisibility] = useState(false);

  const burgerRef = useRef(null);
  useOnClickOutside(burgerRef, () => setVisibility(false));

  const toggleDropdown = () => setVisibility(!isVisible);

  const handleItemClick = (id: number) => {
    setSelectedItem(id);
    setTimeout(() => {
      toggleDropdown();
    }, 200);
  };

  return (
    <div onClick={toggleDropdown} ref={burgerRef} className={s.dropdown}>
      <p className={s.dropdownHeader}>{items[selectedItem].label}</p>
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
            onClick={() => {
              handleItemClick(item.id);
              dispatch(setCategoryValue(item.label));
            }}
          >
            <p
              className={cn(s.dropdownItemIcon, {
                [s.dropdownItemSelectedText]: item.label === categoryName,
              })}
            >
              {item.label}
            </p>

            <item.Icon
              className={cn(s.dropdownItemIcon, {
                [s.dropdownItemIconSelected]: item.label === categoryName,
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
