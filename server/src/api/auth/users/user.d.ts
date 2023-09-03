export interface User {
  id: number;
  nick: string;
  email: string;
  password: string;
  description: string;
  permission: number;
}

export type UserCreated = Omit<User, "id">;

export type UserUpdated = Partial<UserCreated>;
