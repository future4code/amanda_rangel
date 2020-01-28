import {JwtImplementation} from "../services/jwt/JwtImplementation";
import {SignUpUseCase} from "../business/usecases/auth/SignUpUseCase";
import {UserDatabase} from "../data/user/UserDatabase";
import {BcryptImplementation} from "../services/bcrypt/BcryptImplementation";
import {V4IdGenerator} from "../services/idGenerator/V4IdGenerator";


export class Endpoints {
  constructor(
  ) {}

  static async signUp(path: '/signup', event: Event) {
    try {
      const signUpUseCase = new SignUpUseCase(
      new UserDatabase(),
      new JwtImplementation(),
      new BcryptImplementation(),
      new BcryptImplementation(),
      new V4IdGenerator()
    );

      const result = await signUpUseCase.execute({
      name: event.name,
      email: event.email,
      dateOfBirth: event.dateOfBirth,
      picture: event.picture,
      password: event.password
    });
      return {
      status: 200,
      result,
      message: "Usuário criado com sucesso"
     }
  } catch (e) {
    if (e.errno === 1062) {
      return {
        error: "Usuário já cadastrado"
      }
    } else {
      return {
        errorMessage: e.message
      }
    }
  }
  }
}

export interface Event {
  path: string
  name: string,
  email: string,
  dateOfBirth: string,
  picture: string,
  password: string
}

