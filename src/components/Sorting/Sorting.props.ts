import { SVGProps, FC } from "react";
import {
  CategoryEnum,
  OrderEnum,
} from "store/slices/gameFilterSlice/gameFilterTypes";

export interface ISortingProps {
  type: "category" | "order";
}

export type TCategoryData = {
  id: number;
  label: CategoryEnum;
  Icon: FC<SVGProps<SVGSVGElement>>;
};

export type TOrderData = {
  id: number;
  label: OrderEnum;
};
