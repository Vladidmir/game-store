import { useState, FC, useRef } from "react";

import { ReactComponent as ArrowIcon } from "../../assets/sort/arrow.svg";
import { ReactComponent as CalendarIcon } from "../../assets/sort/calendar.svg";
import { ReactComponent as PricetagIcon } from "../../assets/sort/pricetags.svg";
import { ReactComponent as SlidersIcon } from "../../assets/sort/sliders.svg";

import useOnClickOutside from "../../hooks/useOnClickOutside";
import { TCategoryData, TOrderData, ISortingProps } from "./Sorting.props";

import cn from "classnames";
import s from "./sorting.module.scss";

const categoryData: TCategoryData[] = [
  { id: 0, label: "Price", Icon: PricetagIcon },
  { id: 1, label: "Publish Date", Icon: CalendarIcon },
];

const orderData: TOrderData[] = [
  { id: 0, label: "Lower to bigger" },
  { id: 1, label: "Bigger to lower" },
];

// краще б написав два окремих компоненти,ніж один універсальний і важко читаємий, але вже пізно відступати :D

export const Sorting: FC<ISortingProps> = ({ type }) => {
  const [items] = useState<TCategoryData[] | TOrderData[]>(
    type === "category" ? categoryData : orderData
  );
  const [selectedItem, setSelectedItem] = useState(1);

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
    <div
      ref={burgerRef}
      className={cn(s.dropdown, {
        [s.category]: type === "category",
        [s.orderIcon]: type === "order",
      })}
    >
      <div
        className={cn(s.dropdownHeader, {
          [s.orderIcon]: type === "order",
        })}
        onClick={toggleDropdown}
      >
        {"Icon" in items[0] ? (
          <>
            <p>{items[selectedItem].label}</p>
            <ArrowIcon
              className={cn({
                [s.dropdownIconOpen]: isVisible,
              })}
            />
          </>
        ) : (
          <SlidersIcon fontSize={25} />
        )}
      </div>
      <div
        className={cn(s.dropdownBody, {
          [s.dropdownOpen]: isVisible,
          [s.category]: type === "category",
          [s.orderBurger]: type === "order",
        })}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={s.dropdownItem}
            onClick={() => handleItemClick(item.id)}
          >
            <p>{item.label}</p>

            {"Icon" in item ? (
              <item.Icon
                className={cn(s.dropdownItemIcon, {
                  [s.dropdownItemIconSelected]: item.id === selectedItem,
                })}
              />
            ) : (
              <div
                className={cn(s.dropdownItemDot, {
                  [s.dropdownItemDotSelected]: item.id === selectedItem,
                })}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
