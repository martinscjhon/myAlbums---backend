export class ConfigEnviroment {
  public static APP_PORT: number;

  public static TypeOrmHost: string;
  public static TypeOrmPort: number;
  public static TypeOrmUsername: string;
  public static TypeOrmPassword: string;
  public static TypeOrmDatabase: string;
  public static TypeOrmEntities: string;
  public static TypeOrmMigrations: string;
  public static TypeOrmSyncronize: boolean;
  public static TypeOrmLogging: boolean;

  public static JwtSecret: string;
  public static CryptoSecret: string;

  public static async register() {
    // SERVER
    ConfigEnviroment.APP_PORT = Number(process.env.APP_PORT) || 3000;

    // DATABASE
    ConfigEnviroment.TypeOrmHost = process.env.TYPEORM_HOST!;
    ConfigEnviroment.TypeOrmPort = Number(process.env.TYPEORM_PORT) || 3306;
    ConfigEnviroment.TypeOrmUsername = process.env.TYPEORM_USERNAME!;
    ConfigEnviroment.TypeOrmPassword = process.env.TYPEORM_PASSWORD!;
    ConfigEnviroment.TypeOrmDatabase = process.env.TYPEORM_DATABASE!;
    ConfigEnviroment.TypeOrmEntities = process.env.TYPEORM_ENTITIES!;
    ConfigEnviroment.TypeOrmMigrations = process.env.TYPEORM_MIGRATIONS!;
    ConfigEnviroment.TypeOrmSyncronize =
      process.env.TYPEORM_SYNCHRONIZE === "true";
    ConfigEnviroment.TypeOrmLogging = process.env.TYPEORM_LOGGING === "true";

    // SECURITY
    ConfigEnviroment.JwtSecret = process.env.JWT_SECRET!;
    ConfigEnviroment.CryptoSecret = process.env.CRYPTO_SECRET!;
  }
}
