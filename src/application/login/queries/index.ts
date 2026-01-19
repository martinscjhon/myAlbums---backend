import { DatabaseConfig } from "@/config";
import { User } from "@/domain/entity/User";
import { Repository } from "typeorm";

export class LoginQueryRepository {
  private readonly repository: Repository<User>;

  constructor() {
    this.repository = DatabaseConfig.AppDataSource.getRepository(User);
  }

  async execute(email: string): Promise<any> {
    const sql = `select * from user u where u.Email = "${email}"`;

    return this.repository.query(sql);
  }

  async update(password: string, email: string): Promise<any> {
    const sql = `update user u set u.Password = "${password}" where u.Email = "${email}"`;

    return this.repository.query(sql);
  }
}
