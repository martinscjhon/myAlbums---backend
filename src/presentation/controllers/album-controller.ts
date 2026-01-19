import { Express, Request, Response } from "express";
import { badRequest, ok } from "../helpers";
import { AlbumService } from "../services/album-service";
import { middlewareAuthenticate } from "@/infrastructure/midlleware/authenticate";

export class AlbumController {
  public static register(app: Express) {
    const controllerName = "album";
    const service = new AlbumService();

    app.post(
      `/${controllerName}`,
      middlewareAuthenticate,
      async (req: Request, res: Response) => {
        try {
          const payload = req.body;
          const decoded = req.user;
          const created = await service.create({
            description: payload.description,
            name: payload.name,
            userUuid: decoded.UserUuid || "",
          });
          ok(req, res, created);
        } catch (error) {
          badRequest(res, error);
        }
      },
    );

    app.get(
      `/${controllerName}`,
      middlewareAuthenticate,
      async (req: Request, res: Response) => {
        try {
          const decoded = req.user;
          const getAll = await service.getAll(decoded.UserUuid);
          ok(req, res, getAll);
        } catch (error) {
          badRequest(res, error);
        }
      },
    );

    app.delete(
      `/${controllerName}/:uuid`,
      middlewareAuthenticate,
      async (req: Request<{ uuid: string }>, res: Response) => {
        try {
          const { uuid } = req.params;
          const deleted = await service.delete(uuid);
          ok(req, res, deleted);
        } catch (error) {
          badRequest(res, error);
        }
      },
    );
  }
}
