import { Express, Request, Response } from "express";
import { UserService } from "../services/user-service";
import { badRequest, ok } from "../helpers";

export class UserController {
  public static register(app: Express) {
    const controllerName = "user";
    const service = new UserService();

    app.post(`/${controllerName}`, async (req: Request, res: Response) => {
      try {
        const created = await service.create(req.body);
        ok(req, res, created);
      } catch (error) {
        badRequest(res, error);
      }
    });
  }
}
