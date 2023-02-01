import { useState, FC, useRef } from "react";
import { ReactComponent as SlidersIcon } from "../../../assets/sort/sliders.svg";

import useOnClickOutside from "../../../hooks/useOnClickOutside";

import cn from "classnames";
import s from "./orderBurger.module.scss";

import { TOrderData, OrderEnum } from "types/gamesSorting.types";

interface IOrderBurger {
  orderOptions: TOrderData[];
  currentOrder: OrderEnum;
  onChangeSortByOrder: (selectedOrder: OrderEnum) => void;
}

export const OrderBurger: FC<IOrderBurger> = ({
  currentOrder,
  onChangeSortByOrder,
  orderOptions,
}) => {
  const [items] = useState(orderOptions);
  const [isVisible, setVisibility] = useState(false);
  const burgerRef = useRef(null);

  useOnClickOutside(burgerRef, () => setVisibility(false));

  const toggleDropdown = () => setVisibility(!isVisible);

  const handleItemClick = (label: OrderEnum) => {
    onChangeSortByOrder(label);
    setTimeout(() => {
      toggleDropdown();
    }, 200);
  };

  return (
    <div ref={burgerRef} className={cn(s.dropdown, s.orderIcon)}>
      <div className={cn(s.dropdownHeader)} onClick={toggleDropdown}>
        <SlidersIcon fontSize={25} />
      </div>
      <div
        className={cn(s.dropdownBody, {
          [s.dropdownOpen]: isVisible,
        })}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={s.dropdownItem}
            onClick={() => handleItemClick(item.label)}
          >
            <p
              className={cn(s.dropdownItemIcon, {
                [s.dropdownItemSelected]: item.label === currentOrder,
              })}
            >
              {item.label}
            </p>

            <div
              className={cn(s.dropdownItemDot, {
                [s.dropdownItemDotSelected]: item.label === currentOrder,
              })}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
