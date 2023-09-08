export interface Category {
  id: number;
  name: string;
}

export type CategoryCreated = Omit<Category, "id">;

export type CategoryUpdated = Partial<CategoryCreated>;
