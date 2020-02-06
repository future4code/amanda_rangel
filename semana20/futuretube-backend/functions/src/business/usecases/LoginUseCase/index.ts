import {SignInDataSource} from "../../dataSources/userDataSource";


export class LoginUseCase {
  constructor(
    private signInDataSource: SignInDataSource,
  ) {}
  async execute(input: LoginUseCaseInput): Promise<LoginUseCaseOutput> {
   const token = await this.signInDataSource.signIn(input.email, input.password);

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
  token: object
}
