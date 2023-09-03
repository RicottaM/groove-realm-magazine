export interface Member {
  id: number;
  name: string;
  instrument: string;
  birth: Date;
  description: string;
}

export type MemberCreated = Omit<Member, "id">;

export type MemberUpdated = Partial<MemberCreated>;
