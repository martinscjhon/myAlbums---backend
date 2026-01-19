import { User } from "@/domain/entity/User";
import { UserViewModel } from "../view/user-view-model";

export class UserMapper {
  public static execute(user: User): UserViewModel {
    return new UserViewModel(user);
  }
}
