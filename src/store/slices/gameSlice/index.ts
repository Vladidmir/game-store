import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {
    setLocalItems: (state, { payload }) => {
      state.items = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGamesByName.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGamesByName.fulfilled, (state, { payload }) => {
        if (!payload.length) {
          state.isFound = false;
        } else {
          state.isFound = true;
        }
        state.status = "success";
        state.items = payload;
      })
      .addCase(fetchGamesByName.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

const { actions, reducer } = gameSlice;

export default reducer;
export const { setLocalItems } = actions;
