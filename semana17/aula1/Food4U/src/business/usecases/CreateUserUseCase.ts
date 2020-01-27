import {generateRandomId} from "../../services/generateRandomId";
import {UserGateway} from "../gateways/UserGateway";
import {CryptographyGateway} from "../gateways/auth/CryptographyGateway";
import {User} from "../entities/User";


export class CreateUserUseCase {
  constructor(
      private userGateway: UserGateway,
      private cryptographyGateway: CryptographyGateway,
  ) {}

    async execute(input: CreateUserInput) {
      this.validateInput(input);
      this.createUser(input);
  }


  validateInput(input: CreateUserInput) {
    if(!input.email || !input.password) {
      throw new Error('Alguma informação está faltando')
    }
  }

  async createUser(input: CreateUserInput) {
    const id = generateRandomId();
    const encryptedPassword = await this.cryptographyGateway.encrypt(input.password);
    const newUser = new User(
        id,
        input.email,
        encryptedPassword
    );

    await this.userGateway.registerUser(newUser)
  }
}

export interface CreateUserInput {
  email: string;
  password: string
}

