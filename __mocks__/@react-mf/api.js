import { of } from "rxjs";

export const fetchWithCache = jest.fn(() => of({ results: [], next: false }));
