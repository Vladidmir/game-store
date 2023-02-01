import { FC, SVGProps } from "react";

export enum CategoryEnum {
  GAME_PRICE = "Price",
  GAME_RELEASE = "Publish Date",
}

export enum OrderEnum {
  TO_BIGGER = "lower to bigger",
  TO_LOWER = "Bigger to lower",
}

export type TOrderData = {
  id: number;
  label: OrderEnum;
};

export type TCategoryData = {
  id: number;
  label: CategoryEnum;
  Icon: FC<SVGProps<SVGSVGElement>>;
};
