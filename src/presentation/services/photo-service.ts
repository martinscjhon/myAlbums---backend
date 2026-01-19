import { BaseService } from "./_base/baseService";
import { Validation } from "@/infrastructure/validations";
import { ICreatePhoto } from "@/infrastructure/interfaces/ICreatePhoto";
import { PhotoQueryRepository } from "@/application/photo/query";
import { PhotoCommandRepository } from "@/application/photo/command";
import { PhotoMapper } from "@/infrastructure/mappers/photo-mapper";
import { AlbumQueryRepository } from "@/application/album/query";

export class PhotoService extends BaseService {
  async create(payload: ICreatePhoto): Promise<any> {
    try {
      Validation.payload(payload, ["title", "path", "albumUuid"]);

      const existAlbum = await new AlbumQueryRepository().findByUuid(
        payload.albumUuid,
      );
      if (!existAlbum) throw new Error("Album não encontrado");

      const existPhoto = await new PhotoQueryRepository().findByName(
        payload.title,
      );

      if (existPhoto)
        throw new Error("Já existente uma foto com esse nome na base de dados");

      const photo = await new PhotoCommandRepository().create(payload);
      return PhotoMapper.execute(photo);
    } catch (error) {
      throw error;
    }
  }

  async getAll(albumUuid: string): Promise<any[]> {
    try {
      if (!albumUuid) throw new Error("Album não informado");

      const existAlbum = await new AlbumQueryRepository().findByUuid(albumUuid);
      if (!existAlbum) throw new Error("Album não encontrado");

      const listAll = await new PhotoQueryRepository().getAll(albumUuid);

      return listAll;
    } catch (error) {
      throw error;
    }
  }

  async delete(uuid: string): Promise<any[]> {
    try {
      if (!uuid) throw new Error("Photo não informada");

      const deleted = await new PhotoCommandRepository().delete(uuid);

      return deleted;
    } catch (error) {
      throw error;
    }
  }
}
