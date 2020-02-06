import {RegisterUserDataSource} from "../../dataSources/userDataSource";
import {IdGeneratorDataSource} from "../../dataSources/idGeneratorDataSource";
import {User} from "../../entities/User";


export class SignUpUseCase {
  constructor(
    private registerUserGateway: RegisterUserDataSource,
    private idGeneratorGateway: IdGeneratorDataSource
  ) {}

  async execute(input: SignUpInput) {
    this.validateInput(input);
    const id = this.idGeneratorGateway.generateId();
    const newUser = new User(
      id,
      input.name,
      input.email,
      input.dateOfBirth,
      input.picture,
      input.password
    );
    await this.registerUserGateway.registerUser(newUser);
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