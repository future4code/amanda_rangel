import express, {Request, Response} from 'express'
import {JwtImplementation} from "../services/jwt/JwtImplementation";
import {SignUpUseCase} from "../business/usecases/auth/SignUpUseCase";
import {UserDatabase} from "../data/user/UserDatabase";
import {BcryptImplementation} from "../services/bcrypt/BcryptImplementation";
import {V4IdGenerator} from "../services/idGenerator/V4IdGenerator";


const app = express();
app.use(express.json());

app.post('/signup', async (req: Request, res: Response) => {
  try {
    const signUpUseCase = new SignUpUseCase(
      new UserDatabase(),
      new JwtImplementation(),
      new BcryptImplementation(),
      new BcryptImplementation(),
      new V4IdGenerator()
    );

    const result = await signUpUseCase.execute({
      name: req.body.name,
      email: req.body.email,
      dateOfBirth: req.body.dateOfBirth,
      picture: req.body.picture,
      password: req.body.password
    });
    res.status(200).send({
      result,
      message: "Usuário criado com sucesso"
    })
  } catch (e) {
    if (e.errno === 1062) {
      res.send({
        error: "Usuário já cadastrado"
      })
    } else {
      res.status(404).send({
        errorMessage: e.message
      })
    }
  }
});

export default app