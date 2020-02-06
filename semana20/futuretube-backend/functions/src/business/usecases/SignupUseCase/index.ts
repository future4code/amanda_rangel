import {RegisterUserDataSource} from "../../dataSources/userDataSource";
import {IdGeneratorDataSource} from "../../dataSources/idGeneratorDataSource";
import {User} from "../../entities/User";
import {TokenGeneratorDataSource} from "../../dataSources/auth";


export class SignUpUseCase {
  constructor(
    private registerUserDataSource: RegisterUserDataSource,
    private idGeneratorDataSource: IdGeneratorDataSource,
    private tokenGeneratorDataSource: TokenGeneratorDataSource

  ) {}

  async execute(input: SignUpInput) {
    this.validateInput(input);
    const id = this.idGeneratorDataSource.generateId();
    const newUser = new User(
      id,
      input.name,
      input.email,
      input.dateOfBirth,
      input.picture,
      input.password
    );
    await this.registerUserDataSource.registerUser(newUser);
    const token = await this.tokenGeneratorDataSource.generateToken(newUser);
    return {
      token
    }
  }

  validateInput(input: SignUpInput) {
    if (!(input.name &&
      input.email &&
      input.dateOfBirth &&
      input.picture &&
      input.password)) {
      throw new Error("As informações inseridas estão incompletas")
    }
  }
}

export interface SignUpInput {
  name: string,
  email: string,
  dateOfBirth: Date,
  picture: string,
  password: string
}