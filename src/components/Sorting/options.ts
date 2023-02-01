import { ReactComponent as CalendarIcon } from "../../assets/sort/calendar.svg";
import { ReactComponent as PricetagIcon } from "../../assets/sort/pricetags.svg";

import {
  CategoryEnum,
  OrderEnum,
  TCategoryData,
  TOrderData,
} from "types/gamesSorting.types";

export const categoryData: TCategoryData[] = [
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

export const orderData: TOrderData[] = [
  {
    id: 1,
    label: OrderEnum.TO_LOWER,
  },
  {
    id: 0,
    label: OrderEnum.TO_BIGGER,
  },
];
