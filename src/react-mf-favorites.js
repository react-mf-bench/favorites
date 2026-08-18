import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Root from "./root.component.js";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return <div className="mt-16">Error</div>;
  },
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

// The favorites store is part of this module's public API: other
// microfrontends import it via the import map.
export {
  favorites,
  favoritesCount,
  isFavorite,
  toggleFavorite,
} from "./favorites-store.js";
