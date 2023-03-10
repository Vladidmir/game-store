import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryEnum, OrderEnum } from "types/gamesSorting.types";
import { GameFilterSliceState } from "./gameFilterTypes";

const initialState: GameFilterSliceState = {
  searchValue: "",
  categoryName: CategoryEnum.GAME_RELEASE,
  sortByOrder: OrderEnum.TO_BIGGER,
};

const gameFilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },
    setCategoryValue(state, { payload }: PayloadAction<CategoryEnum>) {
      state.categoryName = payload;
    },

    setSortByOrder(state, { payload }: PayloadAction<OrderEnum>) {
      state.sortByOrder = payload;
    },
  },
});

const { actions, reducer } = gameFilterSlice;

export default reducer;
export const { setSearchValue, setCategoryValue, setSortByOrder } = actions;
