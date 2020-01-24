import {UserTokenGateway} from "../../business/gateways/userGateway";
import {User} from "../../business/entities/User";
import * as jwt from "jsonwebtoken"

export class JwtImplementation implements UserTokenGateway {

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
    const jwtData = jwt.verify(token, JwtImplementation.getJwtSecretKey()) as jwtDataModel;
    return jwtData.id
  }

  getUserNameFromToken(token: string): string {
    const jwtData = jwt.verify(token, JwtImplementation.getJwtSecretKey()) as jwtDataModel;
    return jwtData.name
  }

}

export interface jwtDataModel {
  id: string,
  name: string,
  email: string,
  password: string,
  type: string,
  iat: number,
  exp: number
}