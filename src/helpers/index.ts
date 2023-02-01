import { IGameData } from "types/game.interface";

export const customDateSort = (arr: IGameData[], order: "-" | "+") => {
  return arr.sort((a, b) => {
    const dateA = new Date(a.released);
    const dateB = new Date(b.released);

    if (order === "-") {
      return dateA.getTime() - dateB.getTime();
    } else {
      return dateB.getTime() - dateA.getTime();
    }
  });
};

export const sortByPrice = (arr: IGameData[], order: "-" | "+") => {
  // костиль для несправного API
  arr.sort((a, b) => {
    let indexA = a.price.indexOf("€");
    let indexB = b.price.indexOf("€");

    let priceA =
      parseFloat(a.price.slice(0, indexA).replace(/[^\d\.]/g, "")) || 0;
    let priceB =
      parseFloat(b.price.slice(0, indexB).replace(/[^\d\.]/g, "")) || 0;

    if (order === "-") {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  return arr;
};
