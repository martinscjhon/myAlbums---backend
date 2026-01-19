import { BaseCommandRepository } from "@/application/_base/baseCommandRepository";
import { DatabaseConfig } from "@/config";
import { User } from "@/domain/entity/User";
import { Repository } from "typeorm";
import { UserQueryRepository } from "../queries";
import { ICreateUser } from "@/infrastructure/interfaces/ICreateUser";
import { randomUUID } from "crypto";

export class UserCommandRepository implements BaseCommandRepository<User> {
  private readonly repository: Repository<User>;
  private readonly userQueryRepository;

  constructor() {
    this.repository = DatabaseConfig.AppDataSource.getRepository(User);
    this.userQueryRepository = new UserQueryRepository();
  }

  async create(payload: ICreateUser): Promise<User> {
    const { email, name, password } = payload;

    const user = new User();
    user.Uuid = randomUUID();
    user.Email = email;
    user.Name = name;
    user.Password = password;

    return await this.repository.save(user);
  }
}
