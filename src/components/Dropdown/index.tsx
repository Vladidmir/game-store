import { useState, FC, SVGProps, useRef } from "react";

import { ReactComponent as ArrowIcon } from "../../assets/sort/arrow.svg";
import { ReactComponent as CalendarIcon } from "../../assets/sort/calendar.svg";
import { ReactComponent as PricetagIcon } from "../../assets/sort/pricetags.svg";
import { ReactComponent as SlidersIcon } from "../../assets/sort/sliders.svg";

import classNames from "classnames";
import s from "./dropdown.module.scss";

import useOnClickOutside from "../../hooks/useOnClickOutside";

type TCategoryDataData = {
  id: number;
  label: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
};

type TOrderData = {
  id: number;
  label: string;
};

const categoryData: TCategoryDataData[] = [
  { id: 0, label: "Price", Icon: PricetagIcon },
  { id: 1, label: "Publish Date", Icon: CalendarIcon },
];

const orderData: TOrderData[] = [
  { id: 0, label: "Lower to bigger" },
  { id: 1, label: "Bigger to lower" },
];

interface IDropdownProps {
  type: "category" | "order";
}
export const Dropdown: FC<IDropdownProps> = ({ type }) => {
  const [isVisible, setVisibility] = useState(false);
  const burgerRef = useRef(null);
  useOnClickOutside(burgerRef, () => setVisibility(false));

  const [items] = useState<TCategoryDataData[] | TOrderData[]>(
    type === "category" ? categoryData : orderData
  );
  const [selectedItem, setSelectedItem] = useState(1);

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
      className={classNames(s.dropdown, {
        [s.category]: type === "category",
        [s.order]: type === "order",
      })}
    >
      <div
        className={classNames(s.dropdownHeader, {
          [s.order]: type === "order",
        })}
        onClick={toggleDropdown}
      >
        {"Icon" in items[0] ? (
          <>
            <p>{items[selectedItem].label}</p>
            <ArrowIcon
              className={classNames({
                [s.dropdownIconOpen]: isVisible,
              })}
            />
          </>
        ) : (
          <SlidersIcon fontSize={25} />
        )}
      </div>
      <div
        className={classNames(s.dropdownBody, {
          [s.dropdownOpen]: isVisible,
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
                className={classNames(s.dropdownItemIcon, {
                  [s.dropdownItemIconSelected]: item.id === selectedItem,
                })}
              />
            ) : (
              <div
                className={classNames(s.dropdownItemDot, {
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
