import { Model } from "objection";
import { Album } from "../albums/album.model";

export class Song extends Model {
  static tableName = "songs";

  declare id: number;
  declare title: string;
  declare duration: number;
  declare description: string;

  static relationMappings = {
    bands: {
      relation: Model.ManyToManyRelation,
      modelClass: Album,
      join: {
        from: "songs.id",
        through: {
          from: "songs_albums.song_id",
          to: "songs_albums.album_id",
        },
        to: "albums.id",
      },
    },
  };
}
