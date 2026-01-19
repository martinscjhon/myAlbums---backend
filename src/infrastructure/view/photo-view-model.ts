import { Photo } from "@/domain/entity/Photo";
import { BaseViewModel } from "./base-view-model";

export class PhotoViewModel extends BaseViewModel {
  Title!: string;
  Path!: string;
  Description!: string;
  AlbumUuid!: string;
  Color!: string;
  CreatedAt!: Date;
  Id!: number;
  Uuid!: string;

  constructor(photo: Photo) {
    super();
    this.Title = photo.Title;
    this.Description = photo.Description;
    this.AlbumUuid = photo.AlbumUuid;
    this.Path = photo.Path;
    this.Color = photo.Color;
    this.CreatedAt = photo.CreatedAt;
    this.Uuid = photo.Uuid;
  }
}
