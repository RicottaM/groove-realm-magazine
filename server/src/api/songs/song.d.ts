export interface Song {
  id: number;
  title: string;
  duration: number;
  description: string;
}

export type SongCreated = Omit<Song, "id">;

export type SongUpdated = Partial<SongCreated>;
