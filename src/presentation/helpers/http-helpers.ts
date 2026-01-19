import { Response, Request } from "express";

export const ok = (req: Request, res: Response, data: any) => {
  res.status(200).json({
    data,
    isError: false,
  });
};

export const badRequest = (res: Response, error: any) => {
  let message: string = "";

  if (error instanceof Error) message = error.message;
  else message = "Ocorreu um erro ao realizar essa ação";

  res.status(400).json({
    message,
    isError: true,
  });
};

export const unauthorized = (res: Response, message: string) =>
  res.status(401).json({
    data: message,
    isError: true,
  });
