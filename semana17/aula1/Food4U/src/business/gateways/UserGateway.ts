import {User} from "../entities/User";

export interface UserGateway {
  registerUser(user: User): string
}