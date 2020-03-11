import {User} from "../../entities/User";

export interface RegisterUserGateway {
  registerUser(user: User): Promise<void>
}

export interface GetUserGateway {
  getUserByEmail(email: string): Promise<User | undefined>
}