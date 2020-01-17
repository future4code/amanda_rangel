import express, {Request, Response} from 'express'
import {CreateUserUseCase} from "../business/usecases/CreateUserUseCase";
import {UserDatabase} from "../data/UserDatabase";
import {Bcryptimplementation} from "../services/crypt/bcryptimplementation";
import {LoginUseCase} from "../business/usecases/LoginUseCase";
import {JwtImplementation} from "../services/jwt/JwtImplementation";
import {CreateRecipeInput, CreateRecipeUseCase} from "../business/usecases/CreateRecipeUseCase";
import {RecipeDatabase} from "../data/RecipeDatabase";
import {GetUserInformationUseCase} from "../business/usecases/GetUserInformationUseCase";
import {FollowUserInput, FollowUserUseCase} from "../business/usecases/FollowUserUseCase";


const app = express();
app.use(express.json()); // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
  return (headers["auth"] as string) || "";
};

function authenticate (req: Request) {
  const authService = new JwtImplementation();
  return authService.getUserIdFromToken(getTokenFromHeaders(req.headers));
}

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

  app.get("/getUserInformation", async (req: Request, res: Response) => {
    try {
      const getUserInformation = new GetUserInformationUseCase(
        new UserDatabase(),
        new JwtImplementation()
      );
      const result = await  getUserInformation.execute(
        getTokenFromHeaders(req.headers)
      );
      res.status(200).send(result)
    } catch (error) {
      res.status(400).send({
        errorMessage: error.message
      });
    }
  });

  app.post("/createRecipe", async (req: Request, res: Response) => {
    try {
      const userId = authenticate(req);
      const createRecipeUseCase = new CreateRecipeUseCase(
        new UserDatabase(),
        new RecipeDatabase()
      );
      const input: CreateRecipeInput = {
        title: req.body.title,
        description: req.body.description,
        userId: userId
      };
      const result = await createRecipeUseCase.execute(input);
      res.status(200).send(result)
    } catch (error) {
      res.status(400).send({
        errorMessage: error.message
      });
    }

    app.post("/followUser", async (req: Request, res: Response) => {
      try {
        const userId = authenticate(req);
        const followUserUseCase = new FollowUserUseCase(
          new UserDatabase()
        );
        const input: FollowUserInput = {
          followerUserId: userId,
          followedUserId: req.body.userToFollow
        };
        await followUserUseCase.execute(input);
        res.status(200).send('Usuário seguido com sucesso')
      } catch (error) {
        res.status(400).send({
          errorMessage: error.message
        });
      }
    });
});

export default app