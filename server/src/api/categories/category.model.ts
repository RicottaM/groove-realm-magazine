import { Model } from "objection";

export class Category extends Model {
  static tableName = "bands";

  declare id: number;
  declare name: string;
}
