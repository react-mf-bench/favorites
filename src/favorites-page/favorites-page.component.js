import React from "react";
import { Button } from "@react-mf/styleguide";
import { favorites, toggleFavorite } from "../favorites-store.js";

export default function FavoritesPage() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const subscription = favorites().subscribe(setItems);
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="mt-16 ml-16">
      <h2>Favorites</h2>
      {items.length === 0 ? (
        <p>
          Nothing here yet. Mark starships or films as favorites and they show
          up across the whole app.
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item) => (
            <li
              key={`${item.type}-${item.id}`}
              style={{ marginBottom: "0.5rem" }}
            >
              {item.name} <span style={{ opacity: 0.6 }}>({item.type})</span>{" "}
              <Button className="ml-8" onClick={() => toggleFavorite(item)}>
                Remove
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
