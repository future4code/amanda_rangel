import express, {Request, Response} from 'express'
import {CreateUserUseCase} from "../business/usecases/CreateUserUseCase";
import {UserDatabase} from "../data/UserDatabase";
import {Bcryptimplementation} from "../services/crypt/bcryptimplementation";
import {LoginUseCase} from "../business/usecases/LoginUseCase";
import {JwtImplementation} from "../services/jwt/JwtImplementation";


const app = express();
app.use(express.json()); // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
  return (headers["auth"] as string) || "";
};

app.post("/signup", async (req: Request, res: Response) => {
  try {
    const createUserUseCase = new CreateUserUseCase(
        new UserDatabase(),
        new Bcryptimplementation()
    );
    await createUserUseCase.execute({
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).send({message: "Usuário criado com sucesso"})
  } catch (error) {
      res.status(400).send({
        errorMessage: error.message
      })
  }
});

app.post("/login", async (req: Request, res: Response) => {
  try {

    const login = new LoginUseCase(
        new UserDatabase(),
        new Bcryptimplementation(),
        new JwtImplementation()
    );
    const result = await login.execute(
        req.body.email,
        req.body.password
    );
    res.status(200).send({token: result})
  } catch (error) {
    res.status(400).send({
      errorMessage: error.message
    });
  }
});

export default app