import { IGameData } from "types/game.interface";

export const customDateSort = (
  a: IGameData,
  b: IGameData,
  order: "-" | "+"
) => {
  const dateA = new Date(a.released);
  const dateB = new Date(b.released);

  if (order === "-") {
    return dateA.getTime() - dateB.getTime();
  } else {
    return dateB.getTime() - dateA.getTime();
  }
};
