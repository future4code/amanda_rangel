import {UserGateway} from "../gateways/UserGateway";
import {AuthenticationGateway} from "../gateways/auth/AuthenticationGateway";

export  class GetUserInformationUseCase {
  constructor(
      private userGateway: UserGateway,
      private authenticationGateway: AuthenticationGateway
  ) {}

  async execute(token: string): Promise<GetUserInformationOutput> {
    const userId = this.authenticationGateway.getUserIdFromToken(token);
    const user = await this.userGateway.getUserById(userId);
    return {
      id: user.getId(),
      email: user.getEmail()
    }
  }
}

export interface GetUserInformationOutput {
  id: string
  email: string
}