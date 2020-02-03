import {GetUserGateway} from "../../gateways/user/userGateway";
import {CompareGateway} from "../../gateways/bcrypt/bcryptGateway";
import {GenerateTokenGateway} from "../../gateways/token/tokenGateway";

export class LoginUseCase {
  constructor(
    private getUserGateway: GetUserGateway,
    private compareGateway: CompareGateway,
    private generateTokenGateway: GenerateTokenGateway
  ) {}
  async execute(input: LoginUseCaseInput): Promise<LoginUseCaseOutput> {
    const user = await this.getUserGateway.getUserByEmail(input.email);

    if(!user) {
      throw new Error("Usuário não existe")
    }

    const isPasswordCorrect = await this.compareGateway.compare(
      input.password,
      user.getPassword()
    );

    if(!isPasswordCorrect){
      throw new Error ("Senha ou email incorretos")
    }
    const token = this.generateTokenGateway.generateToken({...user});
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

