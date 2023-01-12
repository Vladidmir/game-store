import { ProductCard } from "components/ProductCard";
import s from "./productCardList.module.scss";

export const ProductCardList = () => {
  return (
    <ul className={s.list}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ul>
  );
};
