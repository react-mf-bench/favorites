import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FavoritesPage from "./favorites-page/favorites-page.component.js";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/favorites" component={FavoritesPage} />
    </BrowserRouter>
  );
}
