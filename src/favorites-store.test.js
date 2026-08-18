import {
  favoritesCount,
  toggleFavorite,
  favorites,
} from "./favorites-store.js";

describe("favorites store", () => {
  it("toggles items in and out and emits the live count", () => {
    const counts = [];
    const countSub = favoritesCount().subscribe((count) => counts.push(count));

    const xwing = { type: "starship", id: "1", name: "X-wing" };
    toggleFavorite(xwing);
    toggleFavorite({ type: "film", id: "1", name: "A New Hope" });
    toggleFavorite(xwing);

    let latest;
    const sub = favorites().subscribe((items) => (latest = items));
    expect(latest.map((item) => item.name)).toEqual(["A New Hope"]);
    expect(counts[counts.length - 1]).toBe(1);

    countSub.unsubscribe();
    sub.unsubscribe();
  });
});
