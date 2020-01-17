import {User} from "../entities/User";

export interface UserGateway {
  registerUser(user: User): Promise<void>
  getUserByEmail(email: string): Promise<User>;
  validateUserExistence(id: string): Promise<boolean>
}