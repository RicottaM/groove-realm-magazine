import { Model, RelationMapping, ModelClassSpecifier } from "objection";
import { Band } from "../bands/band.model";

export class Album extends Model {
  static tableName = "albums";

  declare id: number;
  declare title: string;
  declare releaseYear: number;
  declare bandId: number;
  declare description: string;

  static relationMappings = {
    bandId: {
      relation: Model.BelongsToOneRelation,
      modelClass: Band,
      join: {
        from: "albums.band_id",
        to: "bands.id",
      },
    },
  };
}
