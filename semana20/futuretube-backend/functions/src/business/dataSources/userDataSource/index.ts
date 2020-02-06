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

export interface SignInDataSource {
  signIn(email: string, password: string): Promise<object>
}


