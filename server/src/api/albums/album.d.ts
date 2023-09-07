export interface Album {
  id: number;
  name: string;
  formedYear: number;
  description: string;
  country: string;
}

export type AlbumCreated = Omit<Album, "id">;

export type AlbumUpdated = Partial<AlbumCreated>;
