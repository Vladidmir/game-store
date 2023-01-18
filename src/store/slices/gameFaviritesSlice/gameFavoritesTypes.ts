import { IGameData } from "types/game.interface";

export interface IFavoriteGameSlice {
  favorites: IGameData[];
  totalCount: number;
}
