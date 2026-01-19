import { BaseQueryRepository } from "@/application/_base/baseQueryRepository";
import { DatabaseConfig } from "@/config";
import { Album } from "@/domain/entity/Album";
import { Repository } from "typeorm";

export class AlbumQueryRepository implements BaseQueryRepository<Album> {
  private readonly repository: Repository<Album>;

  constructor() {
    this.repository = DatabaseConfig.AppDataSource.getRepository(Album);
  }

  async findByUuid(uuid: string): Promise<Album | null> {
    const album = await this.repository.findOneBy({ Uuid: uuid });
    return album || null;
  }

  async findByName(name: string): Promise<Album | null> {
    const album = await this.repository.findOneBy({ Name: name });
    return album || null;
  }

  async findByUserUuid(userUuid: string): Promise<Album[]> {
    const album = await this.repository.find({ where: { UserUuid: userUuid } });
    return album || [];
  }
}
