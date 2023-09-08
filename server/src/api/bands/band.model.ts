import { Model, RelationMapping, ModelClassSpecifier } from "objection";
import { Genre } from "../genres/genre.model";

export class Band extends Model {
  static tableName = "bands";

  declare id: number;
  declare name: string;
  declare formedYear: number;
  declare description: string;
  declare country: string;

  static relationMappings = {};

  static setupRelation(genre: ModelClassSpecifier) {
    const relationMappings: Record<string, RelationMapping<Model>> = {};

    if (genre) {
      relationMappings.genre = {
        relation: Model.ManyToManyRelation,
        modelClass: Genre,
        join: {
          from: "bands.id",
          through: {
            from: "bands_genres.band_id",
            to: "bands_genres.genre_id",
          },
          to: "genres.id",
        },
      };
    }

    return relationMappings;
  }
}
