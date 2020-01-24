import {User} from "../entities/User";

export interface CreateUserGateway {
  createUser(user: User): Promise<void>
}

export interface UserTokenGateway {
  generateToken(input: any): string
  verifyToken(input: string): any
  getUserIdFromToken(token: string): string
  getUserNameFromToken(token: string): string
}

export interface UserGettersGateway{
  getUserByEmail(email: string): Promise<User | undefined>
}

export interface UserRelationGateway {
  findUser(id: string): Promise<boolean>
  toggleUserRelation(followerUserId: string, followedUserId: string): Promise<void>
}



