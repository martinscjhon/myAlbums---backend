import { JwtAuthentication } from "@/infrastructure/authentication/jwt-authentication";
import { Crypt } from "@/infrastructure/authentication/crypto";
import { ILogin } from "@/infrastructure/interfaces/ILogin";
import { Validation } from "@/infrastructure/validations";
import { UserQueryRepository } from "@/application/users/queries";
import { LoginQueryRepository } from "@/application/login/queries";
import { SignInViewModel } from "@/infrastructure/view/signIn-view-model";

export class LoginService {
  async execute(payload: ILogin): Promise<any> {
    try {
      Validation.payload(payload, ["email", "password"]);

      const existUser = await new UserQueryRepository().findByEmail(
        payload.email,
      );
      if (!existUser) throw new Error("Usuário não existente na base de dados");

      const login: any = await new LoginQueryRepository().execute(
        payload.email,
      );

      const currentCryptPassword = login[0]?.Password;

      const validation = await Crypt.compare(
        payload.password,
        currentCryptPassword,
      );

      if (!validation) throw new Error("Senha inválida");

      const viewModel = new SignInViewModel(
        login[0]?.Uuid,
        login[0]?.Name,
        login[0]?.CreatedAt,
      );

      const token = await JwtAuthentication.generate(viewModel);
      return { token };
    } catch (error) {
      throw error;
    }
  }

  async updatePassword(payload: ILogin): Promise<boolean> {
    try {
      Validation.payload(payload, ["email", "password"]);

      const existUser = await new UserQueryRepository().findByEmail(
        payload.email,
      );
      if (!existUser) throw new Error("Usuário não existente na base de dados");

      payload.password = await Crypt.hash(payload.password);
      const updated: any = await new LoginQueryRepository().update(
        payload.password,
        payload.email,
      );

      return updated.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  }
}
