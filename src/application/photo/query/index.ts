import { BaseQueryRepository } from "@/application/_base/baseQueryRepository";
import { DatabaseConfig } from "@/config";
import { Photo } from "@/domain/entity/Photo";
import { Repository } from "typeorm";

export class PhotoQueryRepository implements BaseQueryRepository<Photo> {
  private readonly repository: Repository<Photo>;

  constructor() {
    this.repository = DatabaseConfig.AppDataSource.getRepository(Photo);
  }

  async findByUuid(uuid: string): Promise<Photo | null> {
    const photo = await this.repository.findOneBy({ Uuid: uuid });
    return photo || null;
  }

  async findByName(title: string): Promise<Photo | null> {
    const photo = await this.repository.findOneBy({ Title: title });
    return photo || null;
  }

  async getAll(albumUuid: string): Promise<any[]> {
    const sql = `
    select
      p.*,
      a.Name,
      a.Description,
      a.CreatedAt as Criacao_album
    from photo p 
    inner join album a on a.Uuid  = p.AlbumUuid
    where a.Uuid = "${albumUuid}"`;

    const exeuteQuery = await this.repository.query(sql);
    return exeuteQuery;
  }

  async findByAlbumUuid(albumUuid: string): Promise<boolean> {
    const sql = `
    select
      p.Uuid
    from photo p     
    where p.AlbumUuid = "${albumUuid}"`;

    const exeuteQuery = await this.repository.query(sql);

    if (exeuteQuery?.length === 0) return true;
    else return false;
  }
}
