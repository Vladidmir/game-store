import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CategoryEnum,
  OrderEnum,
  GameFilterSliceState,
} from "./gameFilterTypes";

const initialState: GameFilterSliceState = {
  searchValue: "",
  categoryName: CategoryEnum.GAME_PRICE,
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

    sortByOrder(state, { payload }: PayloadAction<OrderEnum>) {
      state.sortByOrder = payload;
    },
  },
});

const { actions, reducer } = gameFilterSlice;

export default reducer;
export const { setSearchValue, setCategoryValue, sortByOrder } = actions;
