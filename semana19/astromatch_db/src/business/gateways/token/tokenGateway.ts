import {User} from "../../entities/User";

export interface GenerateTokenGateway {
  generateToken(input: any): string;
}

export interface VerifyTokenGateway {
  verifyToken(input: string): any;
}

export interface GetUserIdFromToken{
  getUserIdFromToken(token: string): string
}