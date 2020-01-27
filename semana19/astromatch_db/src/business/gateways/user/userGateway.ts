import {User} from "../../entities/User";

export interface RegisterUserGateway {
  registerUser(user: User): Promise<void>
}