import { BaseService } from "./_base/baseService";
import { Validation } from "@/infrastructure/validations";
import { ICreateAlbum } from "@/infrastructure/interfaces/ICreateAlbum";
import { AlbumQueryRepository } from "@/application/album/query";
import { AlbumCommandRepository } from "@/application/album/command";
import { AlbumMapper } from "@/infrastructure/mappers/album-mapper";
import { AlbumViewModel } from "@/infrastructure/view/album-view-model";
import { PhotoQueryRepository } from "@/application/photo/query";

export class AlbumService extends BaseService {
  async create(payload: ICreateAlbum): Promise<any> {
    try {
      Validation.payload(payload, ["name"]);

      const existAlbum = await new AlbumQueryRepository().findByName(
        payload.name,
      );
      if (existAlbum) throw new Error("Álbum já existente na base de dados");

      const album = await new AlbumCommandRepository().create(payload);
      return AlbumMapper.execute(album);
    } catch (error) {
      throw error;
    }
  }

  async getAll(userUuid: string): Promise<any[]> {
    try {
      const album = await new AlbumQueryRepository().findByUserUuid(userUuid);
      return album;
    } catch (error) {
      throw error;
    }
  }

  async delete(albumUuid: string): Promise<boolean> {
    try {
      if (!albumUuid)
        throw new Error("UUID do álbum é obrigatório para deleção");

      const existPhoto = await new PhotoQueryRepository().findByAlbumUuid(
        albumUuid,
      );

      if (!existPhoto) throw new Error("Existem fotos cadastradas neste álbum");

      const deleted = await new AlbumCommandRepository().delete(albumUuid);
      return deleted;
    } catch (error) {
      throw error;
    }
  }
}
