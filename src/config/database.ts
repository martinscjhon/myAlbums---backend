import { DataSource } from "typeorm";
import { ConfigEnviroment } from "./enviroment";

export class DatabaseConfig {
  public static AppDataSource: DataSource;

  public static async initialize() {
    this.AppDataSource = new DataSource({
      type: "mysql",
      host: ConfigEnviroment.TypeOrmHost,
      username: ConfigEnviroment.TypeOrmUsername,
      password: ConfigEnviroment.TypeOrmPassword,
      database: ConfigEnviroment.TypeOrmDatabase,
      entities: [<any>ConfigEnviroment.TypeOrmEntities],
      migrations: [<any>ConfigEnviroment.TypeOrmMigrations],
      synchronize: ConfigEnviroment.TypeOrmSyncronize,
      logging: ConfigEnviroment.TypeOrmLogging,
    });

    await this.AppDataSource.initialize()
      .then(() => {
        console.log("DatabaseConnected");
      })
      .catch((error) => console.log(error));
  }
}
