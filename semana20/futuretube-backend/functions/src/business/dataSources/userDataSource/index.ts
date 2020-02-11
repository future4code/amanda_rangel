import {User} from "../../entities/User";

export interface RegisterUserDataSource {
  registerUser(user: User): Promise<any>
}

export interface ChangePasswordDataSource {
  changePassword(userId: string, newPassword: string): Promise<any>
}

export interface GetUserByEmailDataSource {
  getUser(email: string): Promise<object>
}

export interface GetUserIdByEmail {
  getUserId(email:string): Promise<string>
}

export interface SignInDataSource {
  signIn(email: string, password: string): Promise<object>
}

export interface UpdateUserDataSource {
  updateUser(user: User): Promise<any>
}






