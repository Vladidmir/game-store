import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  OutsideAppContainer,
  MainPage,
  FavoritesPage,
  NotFound,
  DetailsPage,
} from "../index";

export const App = () => {
  return (
    <OutsideAppContainer>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:cardId" element={<DetailsPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="/favorites/:cardId" element={<DetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </OutsideAppContainer>
  );
};
