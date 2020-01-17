import {AuthenticationGateway} from "../../business/gateways/auth/AuthenticationGateway";
import * as jwt from "jsonwebtoken"


export class JwtImplementation implements AuthenticationGateway {
  private static EXPIRES_IN = "1h";

  private getJwtSecretKey(): string {
    if (!process.env.JWT_SECRET) {
      throw new Error("Missing JWT secret key")
    }
    return process.env.JWT_SECRET
  }

  generateToken(userId: string): string {
    return jwt.sign(
        {userId},
        this.getJwtSecretKey(),
        {expiresIn: JwtImplementation.EXPIRES_IN}
    )
  }
}