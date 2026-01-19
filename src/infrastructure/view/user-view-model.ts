import { User } from "@/domain/entity/User";
import { BaseViewModel } from "./base-view-model";

export class UserViewModel extends BaseViewModel {
  Name!: string;
  DateBirth!: Date;
  Email!: string;
  CreatedAt!: Date;
  Id!: number;

  constructor(user: User) {
    super();
    this.Name = user.Name;
    this.Email = user.Email;
    this.Uuid = user.Uuid;
    this.CreatedAt = user.CreatedAt;
    this.Id = user.Id;
  }
}
