import { useAppDispatch, useAppSelector } from "store";

//components
import { CategoryBurger, OrderBurger } from "../UI";

//actions
import { setCategoryValue, setSortByOrder } from "store/slices/gameFilterSlice";

//types
import { CategoryEnum, OrderEnum } from "types/gamesSorting.types";

import { categoryData, orderData } from "./options";

export const Sorting = () => {
  const dispatch = useAppDispatch();
  const { categoryName, sortByOrder } = useAppSelector(
    (state) => state.gameFilterReducer
  );

  const onChangeCategory = (selectedCategory: CategoryEnum) => {
    dispatch(setCategoryValue(selectedCategory));
  };

  const onChangeSortByOrder = (selectedOrder: OrderEnum) => {
    dispatch(setSortByOrder(selectedOrder));
  };

  return (
    <>
      <OrderBurger
        currentOrder={sortByOrder}
        onChangeSortByOrder={onChangeSortByOrder}
        orderOptions={orderData}
      />

      <CategoryBurger
        categories={categoryData}
        currentCategory={categoryName}
        onChangeCategory={onChangeCategory}
      />
    </>
  );
};
