import * as functions from 'firebase-functions';
import express, {Request, Response} from 'express';
import admin from "firebase-admin";
import {SignUpUseCase} from "./business/usecases/SignupUseCase";
import {UserDatabase} from "./data/UserDatabase";
import {V4IdGenerator} from "./services/V4IdGenerator";

const app = express();

exports.app = functions.https.onRequest(app);

admin.initializeApp(functions.config().firebase);
export let db = admin.firestore();

app.post("/signup", async(req: Request, res: Response) => {
 try {
  const registerUserUseCase = new SignUpUseCase(
    new UserDatabase(),
    new V4IdGenerator()
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

export default app