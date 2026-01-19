import { BaseQueryRepository } from "@/application/_base/baseQueryRepository";
import { DatabaseConfig } from "@/config";
import { User } from "@/domain/entity/User";
import { Repository } from "typeorm";

export class UserQueryRepository implements BaseQueryRepository<User> {
  private readonly repository: Repository<User>;

  constructor() {
    this.repository = DatabaseConfig.AppDataSource.getRepository(User);
  }

  async findByUuid(uuid: string): Promise<User | null> {
    const user = await this.repository.findOneBy({ Uuid: uuid });
    return user || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.repository.findOneBy({ Email: email });
    return user || null;
  }
}
