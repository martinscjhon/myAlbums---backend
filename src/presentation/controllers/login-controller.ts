import { Express, Request, Response } from "express";
import { badRequest, ok } from "../helpers";
import { LoginService } from "../services/login-service";

export class LoginController {
  public static register(app: Express) {
    const controllerName = "login";
    const service = new LoginService();

    app.post(`/${controllerName}`, async (req: Request, res: Response) => {
      try {
        const created = await service.execute(req.body);
        ok(req, res, created);
      } catch (error) {
        badRequest(res, error);
      }
    });

    app.put(
      `/${controllerName}/password`,
      async (req: Request, res: Response) => {
        try {
          const created = await service.updatePassword(req.body);
          ok(req, res, created);
        } catch (error) {
          badRequest(res, error);
        }
      },
    );
  }
}
