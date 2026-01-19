import jwt from "jsonwebtoken";

import { ConfigEnviroment } from "@/config";
import { IGenerateToken } from "../interfaces/IGenerateToken";

export class JwtAuthentication {
  public static async generate(payload: IGenerateToken) {
    return await jwt.sign(
      {
        UserUuid: payload.UserUuid,
        Name: payload.Name,
        CreatedAt: payload.CreatedAt,
      },
      ConfigEnviroment.JwtSecret,
      { expiresIn: "1h" },
    );
  }

  public static async decode(token: string) {
    return await jwt.decode(token);
  }
}
