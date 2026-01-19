import { Express, Request, Response } from "express";
import { badRequest, ok } from "../helpers";
import { middlewareAuthenticate } from "@/infrastructure/midlleware/authenticate";
import { PhotoService } from "../services/photo-service";

export class PhotoController {
  public static register(app: Express) {
    const controllerName = "photo";
    const service = new PhotoService();

    app.post(
      `/${controllerName}`,
      middlewareAuthenticate,
      async (req: Request, res: Response) => {
        try {
          const created = await service.create(req.body);
          ok(req, res, created);
        } catch (error) {
          badRequest(res, error);
        }
      },
    );

    app.get(
      `/${controllerName}/:albumUuid`,
      middlewareAuthenticate,
      async (req: Request<{ albumUuid: string }>, res: Response) => {
        try {
          const { albumUuid } = req.params;
          const getAll = await service.getAll(albumUuid);
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
