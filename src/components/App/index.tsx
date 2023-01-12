import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  OutsideAppContainer,
  MainPage,
  FavoritesPage,
  NotFound,
} from "../index";

export const App = () => {
  return (
    <OutsideAppContainer>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </OutsideAppContainer>
  );
};
