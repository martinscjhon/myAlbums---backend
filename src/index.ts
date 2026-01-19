import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { ConfigEnviroment, DatabaseConfig } from "./config";
import { UserController } from "./presentation/controllers/user-controller";
import { LoginController } from "./presentation/controllers/login-controller";
import cors from "cors";
import { AlbumController } from "./presentation/controllers/album-controller";
import { PhotoController } from "./presentation/controllers/photo-controller";

const app = express();

(async () => {
  dotenv.config({ path: `${__dirname}/../.env.${process.env.NODE_ENV}` });
  app.use(bodyParser.json());
  app.use(cors());

  await ConfigEnviroment.register();
  await DatabaseConfig.initialize();

  // Controllers
  UserController.register(app);
  AlbumController.register(app);
  PhotoController.register(app);
  LoginController.register(app);

  app.get("/health", (_, response) => {
    response.send("API ONLINE!");
  });

  app.listen(ConfigEnviroment.APP_PORT, () => {
    console.log(`Rodando na porta ${ConfigEnviroment.APP_PORT}`);
  });
})();
