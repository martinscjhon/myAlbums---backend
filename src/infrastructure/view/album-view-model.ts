import { BaseViewModel } from "./base-view-model";
import { Album } from "@/domain/entity/Album";

export class AlbumViewModel extends BaseViewModel {
  Name!: string;
  Description!: string;
  UserUuid!: string;
  CreatedAt!: Date;
  Id!: number;
  Uuid!: string;

  constructor(album: Album) {
    super();
    this.Name = album.Name;
    this.Description = album.Description;
    this.Uuid = album.Uuid;
    this.CreatedAt = album.CreatedAt;
    this.Id = album.Id;
  }
}
