import {User} from "../../entities/User";

export interface RegisterUserDataSource {
  registerUser(user: User): Promise<any>
}

export interface ChangePasswordDataSource {
  changePassword(userId: string, newPassword: string): Promise<void>
}

export interface GetUserIdFromTokenDataSource {
  getId(token:string): string
}

