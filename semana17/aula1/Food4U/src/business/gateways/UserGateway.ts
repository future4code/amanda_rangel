import {User} from "../entities/User";

export interface UserGateway {
  registerUser(user: User): Promise<void>;
  getUserByEmail(email: string): Promise<User>;
  validateUserExistence(id: string): Promise<boolean>;
  getUserById(id: string): Promise<User>;
  createUserRelation(followerUserId: string, followedUserId: string): Promise<void>
}