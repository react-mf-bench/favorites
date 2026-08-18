import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

const STORAGE_KEY = "react-mf:favorites";

function readStored() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [];
  } catch (err) {
    return [];
  }
}

const favorites$ = new BehaviorSubject(readStored());

favorites$.subscribe((items) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (err) {
    // storage unavailable (private mode etc.) — favorites stay in-memory
  }
});

// Cross-microfrontend favorites API. Other apps import these through the
// import map (@react-mf/favorites); navbar renders the live count.
export function favorites() {
  return favorites$.asObservable();
}

export function favoritesCount() {
  return favorites$.pipe(map((items) => items.length));
}

export function isFavorite(type, id) {
  return favorites$.pipe(
    map((items) => items.some((item) => item.type === type && item.id === id))
  );
}

export function toggleFavorite(item) {
  const current = favorites$.getValue();
  const exists = current.some(
    (existing) => existing.type === item.type && existing.id === item.id
  );
  favorites$.next(
    exists
      ? current.filter(
          (existing) =>
            !(existing.type === item.type && existing.id === item.id)
        )
      : current.concat([item])
  );
}
