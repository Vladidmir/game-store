import { FC } from "react";
import { useAppSelector } from "store";
import { ProductCard } from "../index";
import { IGameData } from "types/game.interface";
import { ErrorMessage } from "components/UI/ErrorMesage";
import s from "./productCardList.module.scss";

interface IProductCardListProps {
  data: IGameData[];
}
export const ProductCardList: FC<IProductCardListProps> = ({ data }) => {
  const { status } = useAppSelector((state) => state.gameReducer);

  if (status === "error") {
    return <ErrorMessage />;
  }

  return (
    <ul className={s.list}>
      {data.map((item) => (
        <ProductCard key={item.title} {...item} />
      ))}
    </ul>
  );
};
