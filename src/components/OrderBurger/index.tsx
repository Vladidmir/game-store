import { useState, FC, useRef } from "react";
import { useAppDispatch, useAppSelector } from "store";

import { ReactComponent as SlidersIcon } from "../../assets/sort/sliders.svg";

import useOnClickOutside from "../../hooks/useOnClickOutside";
import { OrderEnum } from "store/slices/gameFilterSlice/gameFilterTypes";
import { setSortByOrder } from "store/slices/gameFilterSlice";

import cn from "classnames";
import s from "./orderBurger.module.scss";
export type TOrderData = {
  id: number;
  label: OrderEnum;
};

// краще б написав два окремих компоненти,ніж один універсальний і важко читаємий, але вже пізно відступати :D

export const OrderBurger: FC = () => {
  const dispatch = useAppDispatch();
  const { sortByOrder } = useAppSelector((state) => state.gameFilterReducer);

  const orderData: TOrderData[] = [
    {
      id: 1,
      label: OrderEnum.TO_LOWER,
    },
    {
      id: 0,
      label: OrderEnum.TO_BIGGER,
    },
  ];
  const [items] = useState<TOrderData[]>(orderData);
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
            onClick={() => {
              handleItemClick(item.id);
              dispatch(setSortByOrder(item.label));
            }}
          >
            <p>{item.label}</p>

            <div
              className={cn(s.dropdownItemDot, {
                [s.dropdownItemDotSelected]: item.label === sortByOrder,
              })}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
