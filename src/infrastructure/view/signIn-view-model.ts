export class SignInViewModel {
  UserUuid: string;
  Name: string;
  CreatedAt: Date;

  constructor(userUuid: string, name: string, createdAt: Date) {
    this.CreatedAt = createdAt;
    this.Name = name;
    this.UserUuid = userUuid;
  }
}
