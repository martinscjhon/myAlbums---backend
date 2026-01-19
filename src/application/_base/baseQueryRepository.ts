export abstract class BaseQueryRepository<T> {
  abstract findByUuid(uuid: string): Promise<T | null>;
}
