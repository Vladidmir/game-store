import s from "./favoritesPage.module.scss";
import { Pagination, ProductCardList, Header } from "../../index";
export const FavoritesPage = () => {
  return (
    <>
      <Header pageName="favoritesPage" />
      <div className={s.favoritesPage}>
        <div className={s.scroll}>{/* <ProductCardList /> */}</div>
        {/* <Pagination /> */}
      </div>
    </>
  );
};
