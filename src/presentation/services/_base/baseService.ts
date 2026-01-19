export abstract class BaseService {
  abstract create(payload: any): Promise<any>;
}
