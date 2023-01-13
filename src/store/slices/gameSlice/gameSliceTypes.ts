import { IGameData } from "types/game.interface";

export interface IGameSlice {
  status: "idle" | "loading" | "success" | "error";
  items: IGameData[];
  isFound: boolean | unknown;
}
