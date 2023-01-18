import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGameData } from "types/game.interface";
import axios from "lib/axios";
import { IGameSlice } from "./gameSliceTypes";
import {
  CategoryEnum,
  GameFilterSliceState,
  OrderEnum,
} from "../gameFilterSlice/gameFilterTypes";
import { customDateSort } from "helpers";

// export const fetchGamesByName = createAsyncThunk<
//   IGameData[],
//   string,
//   {
//     state: { gameReducer: IGameSlice; gameFilterReducer: GameFilterSliceState };
//   }
// >(
//   "@gameSlice/fetchGamesByName",

//   async (gameName, { getState }) => {
//     const { searchValue, categoryName, sortByOrder } =
//       getState().gameFilterReducer;
//     if (gameName === "" && searchValue === "") {
//       return [];
//     } else {
//       const { data } = await axios.get(
//         `/search/${gameName || searchValue}/page/1`
//       );

//       return data;
//     }
//   }
// );

export const fetchGamesByName = createAsyncThunk<
  IGameData[],
  undefined,
  {
    state: { gameReducer: IGameSlice; gameFilterReducer: GameFilterSliceState };
  }
>(
  "@gameSlice/fetchGamesByName",

  async (_, { getState }) => {
    const { searchValue, categoryName, sortByOrder } =
      getState().gameFilterReducer;
    if (searchValue === "") return [];

    const { data } = await axios.get<IGameData[]>(
      `/search/${searchValue}/page/1`
    );

    if (
      categoryName === CategoryEnum.GAME_RELEASE &&
      sortByOrder === OrderEnum.TO_BIGGER
    ) {
      return data.sort((a, b) => customDateSort(a, b, "-"));
    } else {
      return data.sort((a, b) => customDateSort(a, b, "+"));
    }
  }
);
