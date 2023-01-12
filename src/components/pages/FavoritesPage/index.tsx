import s from "./favoritesPage.module.scss";
import { Pagination, ProductCardList, Header } from "../../index";
export const FavoritesPage = () => {
  return (
    <>
      <Header pageName="favoritesPage" />
      <div className={s.favoritesPage}>
        <div className={s.scroll}>
          <ProductCardList />
        </div>
        <Pagination
          onChangePage={function (page: number): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </>
  );
};
