import { Model } from "objection";
import { Band } from "../bands/band.model";

export class Member extends Model {
  static tableName = "members";

  declare id: number;
  declare name: string;
  declare instrument: string;
  declare birth: Date;
  declare description: string;

  static relationMappings = {
    products: {
      relation: Model.ManyToManyRelation,
      modelClass: Band,
      join: {
        from: "member.id",
        through: {
          from: "bands_members.member_id",
          to: "bands_members.band_id",
        },
        to: "bands.member_id",
      },
    },
  };
}
