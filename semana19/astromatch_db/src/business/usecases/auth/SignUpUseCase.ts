import {RegisterUserGateway} from "../../gateways/user/userGateway";
import {GenerateTokenGateway} from "../../gateways/token/tokenGateway";
import {CompareGateway, EncryptGateway} from "../../gateways/bcrypt/bcryptGateway";
import {IdGeneratorGateway} from "../../gateways/v4/idGeneratorGateway";
import {User} from "../../entities/User";

export class SignUpUseCase {
  constructor(
    private registerUserGateway: RegisterUserGateway,
    private generateTokenGateway: GenerateTokenGateway,
    private encryptGateway: EncryptGateway,
    private compareGateway: CompareGateway,
    private idGeneratorGateway: IdGeneratorGateway
  ) {
  }

  async execute(input: SignUpInput) {
    this.validateInput(input);
    const id = this.idGeneratorGateway.generateId();
    const encryptedPassword = await this.encryptGateway.encrypt(input.password);
    const newUser = new User(
      id,
      input.name,
      input.email,
      input.dateOfBirth,
      input.picture,
      encryptedPassword
    );
    await this.registerUserGateway.registerUser(newUser);
    return this.generateTokenGateway.generateToken({
      ...newUser
    })
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
  dateOfBirth: string,
  picture: string,
  password: string
}