export abstract class BaseCommandRepository<T> {
  abstract create(payload: any): Promise<T | boolean>;
  abstract delete?(uuid: string): Promise<boolean | any>;
}
