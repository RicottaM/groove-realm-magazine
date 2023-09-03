export interface Band {
  id: number;
  name: string;
  formedYear: number;
  description: string;
  country: string;
}

export type BandCreated = Omit<Band, "id">;

export type BandUpdated = Partial<BandCreated>;
