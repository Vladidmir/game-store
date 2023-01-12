import s from "./mainPage.module.scss";
import { Pagination, ProductCardList, Header } from "../../index";
export const MainPage = () => {
  return (
    <>
      <Header pageName="mainPage" />
      <div className={s.mainPage}>
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
