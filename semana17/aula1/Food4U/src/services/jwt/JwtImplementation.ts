import {AuthenticationGateway} from "../../business/gateways/auth/AuthenticationGateway";
import * as jwt from "jsonwebtoken"


export class JwtImplementation implements AuthenticationGateway {
  private static EXPIRES_IN = "1h";

  private static getJwtSecretKey(): string {
    if (!process.env.JWT_SECRET) {
      throw new Error("Missing JWT secret key")
    }
    return process.env.JWT_SECRET
  }

  generateToken(userId: string): string {
    return jwt.sign(
        {userId},
        JwtImplementation.getJwtSecretKey(),
        {expiresIn: JwtImplementation.EXPIRES_IN}
    )
  }

  getUserIdFromToken(token: string): string {
    const jwtData = jwt.verify(token, JwtImplementation.getJwtSecretKey()) as {
      userId:string,
      iat: number,
      exp: number
    };
    return jwtData.userId
  }
}