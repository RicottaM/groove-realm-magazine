import { Model, RelationMapping, ModelClassSpecifier } from "objection";

export class Band extends Model {
  static tableName = "bands";

  declare id: number;
  declare name: string;
  declare formedYear: number;
  declare description: string;
  declare country: string;

  static relationMappings = {};

  static setupRelation(category: ModelClassSpecifier) {
    const relationMappings: Record<string, RelationMapping<Model>> = {};

    if (category) {
      relationMappings.category = {
        relation: Model.ManyToManyRelation,
        modelClass: category,
        join: {
          from: "bands.id",
          through: {
            from: "bands_categories.band_id",
            to: "bands_categories.category_id",
          },
          to: "category.id",
        },
      };
    }

    return relationMappings;
  }
}
