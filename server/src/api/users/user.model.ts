import { Hash } from "crypto";
import { Model } from "objection";

export class User extends Model {
  static tableName = "users";

  declare id: number;
  declare permission: number;
  declare nick: string;
  declare email: string;
  declare password: string;
  declare description: string;
}
