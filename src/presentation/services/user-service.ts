import { ICreateUser } from "@/infrastructure/interfaces/ICreateUser";
import { BaseService } from "./_base/baseService";
import { UserViewModel } from "@/infrastructure/view/user-view-model";
import { Validation } from "@/infrastructure/validations";
import { UserQueryRepository } from "@/application/users/queries";
import { Crypt } from "@/infrastructure/authentication/crypto";
import { UserCommandRepository } from "@/application/users/command";
import { UserMapper } from "@/infrastructure/mappers/user-mapper";

export class UserService extends BaseService {
  async create(payload: ICreateUser): Promise<UserViewModel> {
    try {
      Validation.payload(payload, ["name", "email", "password"]);

      const existUser = await new UserQueryRepository().findByEmail(
        payload.email,
      );

      if (existUser) throw new Error("Usuário já existente na base de dados");

      payload.password = await Crypt.hash(payload.password);
      const user = await new UserCommandRepository().create(payload);

      return UserMapper.execute(user);
    } catch (error) {
      throw error;
    }
  }
}
