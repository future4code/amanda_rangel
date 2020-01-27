import {UserGettersGateway, UserTokenGateway} from "../gateways/userGateway";
import {BcryptCompareGateway} from "../gateways/bcryptCompareGateway";
import {User} from "../entities/User";

export class LoginUseCase {
  constructor(
    private userGettersGateway: UserGettersGateway,
    private bcryptcompareGateway: BcryptCompareGateway,
    private userTokenGateway: UserTokenGateway
  ) {}
  async execute(input: LoginUseCaseInput): Promise<LoginUseCaseOutput> {
    const user = await this.userGettersGateway.getUserByEmail(input.email);

    if(!user) {
      throw new Error("Usuário não existe")
    }

    const isPasswordCorrect = await this.bcryptcompareGateway.compare(
      input.password,
      user.getPassword()
    );

    if(!isPasswordCorrect){
      throw new Error ("Senha ou email incorretos")
    }
    const token = this.userTokenGateway.generateToken({...user});
    return {
      token
    }
  }
}

export interface LoginUseCaseInput{
  email: string;
  password: string;
}

export interface LoginUseCaseOutput{
  token: string
}

