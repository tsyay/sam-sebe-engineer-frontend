export type Url = string & { __brand: "Url" };

export const makeUrl = (path: string): Url =>
  `${import.meta.env.VITE_API_URL || "http://localhost:3001"}${path}` as Url;
