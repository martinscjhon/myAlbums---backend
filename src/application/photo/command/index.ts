import { BaseCommandRepository } from "@/application/_base/baseCommandRepository";
import { DatabaseConfig } from "@/config";
import { Repository } from "typeorm";
import { randomUUID } from "crypto";
import { Photo } from "@/domain/entity/Photo";
import { ICreatePhoto } from "@/infrastructure/interfaces/ICreatePhoto";

export class PhotoCommandRepository implements BaseCommandRepository<Photo> {
  private readonly repository: Repository<Photo>;

  constructor() {
    this.repository = DatabaseConfig.AppDataSource.getRepository(Photo);
  }

  async delete(uuid: string): Promise<boolean | any> {
    const deleted = await this.repository.delete({ Uuid: uuid });
    return deleted;
  }

  async create(payload: ICreatePhoto): Promise<Photo> {
    const photo = new Photo();
    photo.AlbumUuid = payload.albumUuid;
    photo.Color = payload.color;
    photo.Description = payload.description;
    photo.Path = payload.path;
    photo.Title = payload.title;
    photo.Uuid = randomUUID();

    return await this.repository.save(photo);
  }
}
