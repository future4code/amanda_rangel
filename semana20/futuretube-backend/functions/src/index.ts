import * as functions from 'firebase-functions';
import express, {Request, Response} from 'express';
import cors from 'cors'
import admin from "firebase-admin";
import {SignUpUseCase} from "./business/usecases/SignupUseCase";
import {UserDatabase} from "./data/UserDatabase";
import {V4IdGenerator} from "./services/V4IdGenerator";
import {ChangePasswordUseCase} from "./business/usecases/ChangePasswordUseCase";
import {FirebaseAuthGenerateTokenWithUser, FirebaseAuthWithToken} from "./services/FirebaseAuth";
import firebase from "firebase";
import {firebaseConfig} from "./services/FirebaseConfig";
import {LoginUseCase} from "./business/usecases/LoginUseCase";

const app = express();
app.use(cors({ origin: true }));

exports.app = functions.https.onRequest(app);

admin.initializeApp(functions.config().firebase);
firebase.initializeApp(firebaseConfig);

app.post("/signup", async(req: Request, res: Response) => {
 try {
  const registerUserUseCase = new SignUpUseCase(
    new UserDatabase(),
    new V4IdGenerator(),
    new FirebaseAuthGenerateTokenWithUser()
  );
  const result = await registerUserUseCase.execute({
   name: req.body.name,
   email: req.body.email,
   dateOfBirth: req.body.dateOfBirth ,
   picture: req.body.picture,
   password: req.body.password
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

app.post("/signin", async (req: Request, res: Response) => {
 try {
  const loginUseCase = new LoginUseCase(
    new UserDatabase(),
    new UserDatabase()
  );
  const result = await loginUseCase.execute({
   email: req.body.email,
   password: req.body.password
  });
  res.status(200).send({
   result,
   message: "Usuário logado com sucesso"
  });
 } catch (error) {
  res.status(404).send({
   error,
   errorMessage: error.message
  })
 }
});

app.post("/changePassword", async (req: Request, res: Response) => {
 try {
  const token = req.headers.auth as string;
  const authentication = new FirebaseAuthWithToken();
  const userId = await authentication.authenticate(token);

  const changePasswordUseCase = new ChangePasswordUseCase(
   new UserDatabase(),
   new FirebaseAuthWithToken()
  );
  const result = await changePasswordUseCase.execute({
   userId,
   newPassword: req.body.newPassword,
   token
  });
  res.status(200).send({
   result,
   message: "Senha alterada com sucesso"
  });
 } catch (error) {
  res.status(404).send({
   error,
   errorMessage: error.message
  })
 }
});

export default app