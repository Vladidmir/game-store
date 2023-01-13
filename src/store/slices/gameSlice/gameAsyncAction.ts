import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGameData } from "types/game.interface";
import axios from "lib/axios";
import { IGameSlice } from "./gameSliceTypes";

export const fetchGamesByName = createAsyncThunk<
  IGameData[],
  string,
  {
    state: { gameReducer: IGameSlice };
  }
>(
  "@gameSlice/fetchGamesByName",

  async (gameName) => {
    if (gameName === "") return [];
    const { data } = await axios.get(`/search/${gameName}/page/1`);
    return data;
  }
);
