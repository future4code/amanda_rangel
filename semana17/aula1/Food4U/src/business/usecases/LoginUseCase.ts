import {UserGateway} from "../gateways/UserGateway";
import {CryptographyGateway} from "../gateways/auth/CryptographyGateway";
import {AuthenticationGateway} from "../gateways/auth/AuthenticationGateway";

export class LoginUseCase {
  constructor(
      private userGateway: UserGateway,
      private cryptographyGateway: CryptographyGateway,
      private authenticationGateway: AuthenticationGateway
  ) {
  }
  async execute(email:string, password: string): Promise<LoginOutput> {
    const user = await this.userGateway.getUserByEmail(email);
    const isPasswordCorrect = await this.cryptographyGateway.compare(
        password,
        user.getPassword()
    );

    if(!isPasswordCorrect) {
      throw new Error("Email or password are invalid")
    }
    const token = this.authenticationGateway.generateToken(user.getId());
    return {
      token
    }
  }
}

interface LoginOutput {
  token: string;
}