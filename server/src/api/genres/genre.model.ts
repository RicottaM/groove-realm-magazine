import { Model } from "objection";
import { Band } from "../bands/band.model";

export class Genre extends Model {
  static tableName = "genres";

  declare id: number;
  declare name: string;

  static relationMappings = {
    bands: {
      relation: Model.ManyToManyRelation,
      modelClass: Band,
      join: {
        from: "genre.id",
        through: {
          from: "bands_genres.genre_id",
          to: "bands_genres.band_id",
        },
        to: "bands.genre_id",
      },
    },
  };
}
