import {JwtImplementation} from "../services/jwt/JwtImplementation";
import {SignUpUseCase} from "../business/usecases/auth/SignUpUseCase";
import {UserDatabase} from "../data/user/UserDatabase";
import {BcryptImplementation} from "../services/bcrypt/BcryptImplementation";
import {V4IdGenerator} from "../services/idGenerator/V4IdGenerator";
import {LoginUseCase} from "../business/usecases/auth/LoginUseCase";

const getTokenFromHeaders = (headers: any): string => {
  return (headers["auth"] as string) || "";
};

function authenticate(req: Request) {
  const authService = new JwtImplementation();
  return authService.getUserIdFromToken(getTokenFromHeaders(req.headers));
}

export class Endpoints {
  constructor() {
  }

  static async signUp(path: '/signup', event: SignupEvent) {
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

  static async login(path: "/login", event: LoginEvent) {
  try {
    const loginUseCase = new LoginUseCase(
      new UserDatabase(),
      new BcryptImplementation(),
      new JwtImplementation()
    );
    const result = await loginUseCase.execute({
      email: event.email,
      password: event.password

    });
    return {
      status: 200,
      result,
      message: "Usuário logado com sucesso"
    }
  } catch (error) {
    return {
      errorMessage: error.message
    }
  }
  }
}

export interface SignupEvent {
  path: string,
  name: string,
  email: string,
  dateOfBirth: string,
  picture: string,
  password: string
}

export interface LoginEvent {
  path: string,
  email: string,
  password: string
}
