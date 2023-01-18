import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameData } from "types/game.interface";
import { IFavoriteGameSlice } from "./gameFavoritesTypes";

const initialState: IFavoriteGameSlice = {
  favorites: [],
  totalCount: 0,
};

const orderSlice = createSlice({
  name: "favoriteGame",
  initialState,
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<IGameData>) => {
      if (!state.favorites.find(({ title }) => title === payload.title)) {
        state.favorites.push(payload);
        state.totalCount = state.favorites.length;
      }
    },
    removeFavorite: (state, { payload }: PayloadAction<IGameData["appId"]>) => {
      state.favorites = state.favorites.filter(
        (item) => item.appId !== payload
      );
      state.totalCount = state.favorites.length;
    },
  },
});

const { actions, reducer } = orderSlice;

export default reducer;
export const { addFavorite, removeFavorite } = actions;
