import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGameData } from "types/game.interface";
import axios from "lib/axios";
import { IGameSlice } from "./gameSliceTypes";
import { GameFilterSliceState } from "../gameFilterSlice/gameFilterTypes";
import { customDateSort, sortByPrice } from "helpers";
import { CategoryEnum, OrderEnum } from "types/gamesSorting.types";

export const fetchGamesByName = createAsyncThunk<
  IGameData[],
  GameFilterSliceState,
  {
    state: { gameReducer: IGameSlice; gameFilterReducer: GameFilterSliceState };
  }
>(
  "@gameSlice/fetchGamesByName",

  async ({ categoryName, searchValue, sortByOrder }) => {
    if (searchValue === "") return [];

    const { data } = await axios.get<IGameData[]>(
      `/search/${searchValue}/page/1`
    );

    let displayData = data;

    if (categoryName === CategoryEnum.GAME_RELEASE) {
      if (sortByOrder === OrderEnum.TO_BIGGER) {
        displayData = customDateSort(data, "-");
      } else {
        displayData = customDateSort(data, "+");
      }
    } else if (categoryName === CategoryEnum.GAME_PRICE) {
      if (sortByOrder === OrderEnum.TO_BIGGER) {
        displayData = sortByPrice(data, "-");
      } else {
        displayData = sortByPrice(data, "+");
      }
    }
    return displayData;
  }
);
