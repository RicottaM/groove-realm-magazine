export interface Album {
  id: number;
  title: string;
  releaseYear: number;
  bandId: number;
  description: string;
}

export type AlbumCreated = Omit<Album, "id">;

export type AlbumUpdated = Partial<AlbumCreated>;
