export interface Genre {
  id: number;
  name: string;
}

export type GenreCreated = Omit<Genre, "id">;

export type GenreUpdated = Partial<GenreCreated>;
