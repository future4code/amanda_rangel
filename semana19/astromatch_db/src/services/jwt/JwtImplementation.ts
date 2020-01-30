import * as jwt from "jsonwebtoken"
import {
  GenerateTokenGateway,
  GetUserIdFromToken,
  VerifyTokenGateway
} from "../../business/gateways/token/tokenGateway";
import {User} from "../../business/entities/User";

export class JwtImplementation implements GenerateTokenGateway, VerifyTokenGateway, GetUserIdFromToken {

  static SECRET_KEY: string = "JWT_SECRET";
  static EXPIRES_IN: string = "1h";

  private static getJwtSecretKey(): string {
    if(!process.env[JwtImplementation.SECRET_KEY]){
      throw new Error ("Jwt secret key não encontrada");
    }
    return process.env[JwtImplementation.SECRET_KEY]!;
  }

  generateToken(input: User): string {
    return jwt.sign(
      input,
      JwtImplementation.getJwtSecretKey(),
      {expiresIn: JwtImplementation.EXPIRES_IN}
    );
  }

  verifyToken(token: string): any {
    return jwt.verify(token, JwtImplementation.getJwtSecretKey());
  }

  getUserIdFromToken(token: string): string {
    const jwtData = jwt.verify(token, JwtImplementation.getJwtSecretKey()) as JwtDataModel;
    return jwtData.id
  }

}

export interface JwtDataModel {
  id: string,
  name: string,
  email: string,
  dateOfBirth: string,
  picture: string,
  password: string,
  iat: number,
  exp: number
}