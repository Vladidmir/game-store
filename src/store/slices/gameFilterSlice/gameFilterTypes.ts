export enum CategoryEnum {
  GAME_PRICE = "Price",
  GAME_RELEASE = "Publish Date",
}

export enum OrderEnum {
  TO_BIGGER = "lower to bigger",
  TO_LOWER = "Bigger to lower",
}

export interface GameFilterSliceState {
  searchValue: string | "";
  categoryName: CategoryEnum;
  sortByOrder: OrderEnum;
}
