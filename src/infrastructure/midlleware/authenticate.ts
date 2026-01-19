import { Request, Response, NextFunction } from "express";
import { JwtAuthentication } from "@/infrastructure/authentication/jwt-authentication";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export async function middlewareAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authHeader = req.headers.authorization || "";
    if (!authHeader) {
      return res.status(401).json({ message: "Token não informado" });
    }

    const token = authHeader.replace("Bearer ", "");
    const decoded: any = await JwtAuthentication.decode(token);

    req.user = decoded; // adiciona decoded ao req
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
}
