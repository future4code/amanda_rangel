import express, {Request, Response} from 'express'
import {RegisterUserUseCase} from "../business/usecases/RegisterUserUseCase";
import {UserDatabase} from "../data/user/UserDatabase";
import {BcryptImplementation} from "../services/bcrypt/BcryptImplementation";
import {V4IdGenerator} from "../services/idgenerator/V4IdGenerator";
import {JwtImplementation} from "../services/jwt/JwtImplementation";
import {LoginUseCase} from "../business/usecases/LoginUseCase";
import {FollowUserInput, ToggleUserRelationUseCase} from "../business/usecases/ToggleUserRelationUseCase";
import {CreatePostInput, CreatePostUseCase} from "../business/usecases/CreatePostUseCase";
import {PostDatabase} from "../data/post/PostDatabase";
import {FeedInput, GetFeedUseCase} from "../business/usecases/GetFeedUseCase";
import {GetFeedDatabase} from "../data/feed/GetFeedDatabase";
import {FeedByTypeInput, GetFeedByTypeUseCase} from "../business/usecases/GetFeedByTypeUseCase";


const app = express();
app.use(express.json()); // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
  return (headers["auth"] as string) || "";
};

function authenticate(req: Request) {
  const authService = new JwtImplementation();
  return authService.getUserIdFromToken(getTokenFromHeaders(req.headers));
}


app.post("/signup", async(req: Request, res: Response) => {
  try {
    const registerUserUseCase = new RegisterUserUseCase(
      new UserDatabase(),
      new JwtImplementation(),
      new BcryptImplementation(),
      new V4IdGenerator()
    );
    const result = await registerUserUseCase.execute({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      type: req.body.type
    });
    res.status(200).send({
      result,
      message: "Usuário criado com sucesso"
    });
  } catch (error) {
    res.status(404).send({
      error,
      errorMessage: error.message
    })
  }
});

app.post("/login", async (req: Request, res: Response) => {
  try {
    const loginUseCase = new LoginUseCase(
      new UserDatabase(),
      new BcryptImplementation(),
      new JwtImplementation()
    );
    const result = await loginUseCase.execute({
        email: req.body.email,
        password: req.body.password
    });
    res.status(200).send({
      result,
      message: "Usuário criado com sucesso"
    })
  } catch (error) {
    res.status(404).send({
      error,
      errorMessage: error.message
    })
  }
});

app.post("/followOrUnfollowUser", async (req: Request, res: Response) => {
  try {
    const userId = authenticate(req);
    const followUserUseCase = new ToggleUserRelationUseCase(
      new UserDatabase()
    );
    const input: FollowUserInput = {
      followerUserId: userId,
      followedUserId: req.body.userToFollow
    };
    await followUserUseCase.execute(input);
    res.status(200).send("Operação concluída com sucesso")
  } catch (error) {
    res.status(404).send({
      errorMessage: error.message
    })
  }
});

app.post("/createPost", async(req: Request, res: Response) => {
  try {
    const userId = authenticate(req)
    const createPostUseCase = new CreatePostUseCase(
      new PostDatabase(),
      new UserDatabase()
    );
    const input: CreatePostInput = {
      picture: req.body.picture,
      description: req.body.description,
      postType: req.body.postType,
      userId: userId
    };
    const result = await createPostUseCase.execute(input);
    res.status(200).send({
      result,
      message: "Post criado com sucesso"
    })
  } catch (error) {
    res.status(404).send({
      errorMessage: error.message
    })
  }
});

app.get("/feed", async (req: Request, res: Response) => {
  try {
    const userId = authenticate(req);
    const feedUseCase = new GetFeedUseCase(
      new GetFeedDatabase()
    );
    const input: FeedInput = {
      userId,
      page: req.body.page
    };
     const result = await feedUseCase.execute(input);
     res.status(200).send(result)
  } catch (error) {
      res.status(404).send({
        errorMessage: error.message
      })
  }
});

app.get("/feedByType", async(req: Request, res: Response) => {
  try {
    const userId = authenticate(req);
    const feedByTypeUseCase = new GetFeedByTypeUseCase(
      new GetFeedDatabase()
    );
    const input: FeedByTypeInput = {
      userId,
      page: req.body.page,
      postType: req.body.postType
    };
    const result = await feedByTypeUseCase.execute(input);
    res.status(200).send(result)
  } catch (error) {
    res.status(404).send({
      errorMessage: error.message
    })
  }
});

export default app