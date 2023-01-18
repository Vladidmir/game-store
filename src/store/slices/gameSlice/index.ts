import { IGameData } from "./../../../types/game.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchGamesByName } from "./gameAsyncAction";
import { IGameSlice } from "./gameSliceTypes";

const initialState: IGameSlice = {
  items: [],
  status: "idle",
  isFound: undefined,
};

const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGamesByName.pending, (state) => {
        state.status = "loading";
        state.isFound = false;
      })
      .addCase(
        fetchGamesByName.fulfilled,
        (state, { payload }: PayloadAction<IGameData[]>) => {
          if (!payload.length) {
            state.isFound = false;
          } else {
            state.isFound = true;
          }
          state.status = "success";
          state.items = payload;
        }
      )
      .addCase(fetchGamesByName.rejected, (state) => {
        state.status = "error";
        state.items = [];
        state.isFound = false;
      });
  },
});

const { actions, reducer } = gameSlice;

export default reducer;
export const {} = actions;
