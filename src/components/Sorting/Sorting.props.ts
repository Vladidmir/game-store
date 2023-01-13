import { SVGProps, FC } from "react";

export interface ISortingProps {
  type: "category" | "order";
}

export type TCategoryData = {
  id: number;
  label: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
};

export type TOrderData = {
  id: number;
  label: string;
};
