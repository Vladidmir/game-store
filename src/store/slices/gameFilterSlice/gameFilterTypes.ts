import { CategoryEnum, OrderEnum } from "types/gamesSorting.types";

export interface GameFilterSliceState {
  searchValue: string | "";
  categoryName: CategoryEnum;
  sortByOrder: OrderEnum;
}
