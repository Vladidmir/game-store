import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import gameReducer from "./slices/gameSlice";
import gameFilterReducer from "./slices/gameFilterSlice";

export const store = configureStore({
  reducer: { gameReducer, gameFilterReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["@gameSlice/fetchAllGames/fulfilled"],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
