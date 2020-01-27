import {CreateUserGateway, UserTokenGateway} from "../gateways/userGateway";
import {IdGeneratorGateway} from "../gateways/IdGeneratorGateway";
import {EncryptGateway} from "../gateways/encryptGateway";
import {User} from "../entities/User";

export class RegisterUserUseCase {
  constructor(
      private createUserGateway: CreateUserGateway,
      private userTokenGenerator: UserTokenGateway,
      private encryptGateway: EncryptGateway,
      private idGeneratorGateway: IdGeneratorGateway
  ) {}

  async execute(input: RegisterUserInput) {
    this.validateInput(input);
    const id = this.idGeneratorGateway.generateId();
    const encryptedPassword = await this.encryptGateway.encrypt(input.password);
    const newUser = new User(
      id,
      input.name,
      input.email,
      encryptedPassword,
      User.convertUserType(input.type)
    );
    await this.createUserGateway.createUser(newUser);
    const token = this.userTokenGenerator.generateToken({
      ...newUser
    });
    return {
      token
    }
  }

  validateInput(input: RegisterUserInput) {
    if(!(input.type && input.password && input.email && input.password)) {
      throw new Error("As informações inseridas estão incompletas")
    }
  }
}

export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
  type: string
}

export interface RegisterUserOutput {
  token: string;
}



