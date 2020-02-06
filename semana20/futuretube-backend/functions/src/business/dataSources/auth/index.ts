import {User} from "../../entities/User";

export interface TokenGeneratorDataSource {
  generateToken(input: User): Promise<object>
}

export interface AuthenticateDataSource {
  authenticate(token: string): Promise<any>
}

