export enum CategoryEnum {
  GAME_PRICE = "Price",
  GAME_RELEASE = "Date",
}

export enum OrderEnum {
  TO_BIGGER = "bigger",
  TO_LOWER = "lower",
}

export interface GameFilterSliceState {
  searchValue: string;
  categoryName: CategoryEnum;
  sortByOrder: OrderEnum;
}
