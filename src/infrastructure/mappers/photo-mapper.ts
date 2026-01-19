import { PhotoViewModel } from "../view/photo-view-model";
import { Photo } from "@/domain/entity/Photo";

export class PhotoMapper {
  public static execute(album: Photo): PhotoViewModel {
    return new PhotoViewModel(album);
  }
}
