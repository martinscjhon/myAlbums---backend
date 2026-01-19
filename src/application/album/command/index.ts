import { BaseCommandRepository } from "@/application/_base/baseCommandRepository";
import { DatabaseConfig } from "@/config";
import { Repository } from "typeorm";
import { randomUUID } from "crypto";
import { Album } from "@/domain/entity/Album";
import { ICreateAlbum } from "@/infrastructure/interfaces/ICreateAlbum";

export class AlbumCommandRepository implements BaseCommandRepository<Album> {
  private readonly repository: Repository<Album>;

  constructor() {
    this.repository = DatabaseConfig.AppDataSource.getRepository(Album);
  }

  async delete(uuid: string): Promise<boolean | any> {
    const deleted = await this.repository.delete({ Uuid: uuid });
    return deleted;
  }

  async create(payload: ICreateAlbum): Promise<Album> {
    const { description, name, userUuid } = payload;

    const album = new Album();
    album.Uuid = randomUUID();
    album.Description = description;
    album.Name = name;
    album.UserUuid = userUuid;

    return await this.repository.save(album);
  }
}
