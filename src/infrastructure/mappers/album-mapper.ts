import { UserViewModel } from "../view/user-view-model";
import { Album } from "@/domain/entity/Album";
import { AlbumViewModel } from "../view/album-view-model";

export class AlbumMapper {
  public static execute(album: Album): AlbumViewModel {
    return new AlbumViewModel(album);
  }
}
