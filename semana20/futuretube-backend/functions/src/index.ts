import * as functions from 'firebase-functions';
import express, {Request, Response} from 'express';
import cors from 'cors'
import admin from "firebase-admin";
import {SignUpUseCase} from "./business/usecases/SignupUseCase";
import {UserDatabase} from "./data/UserDatabase";
import {V4IdGenerator} from "./services/V4IdGenerator";
import {ChangePasswordUseCase} from "./business/usecases/changePasswordUseCase";
import {FirebaseAuth} from "./services/FirebaseAuth";
import firebase from "firebase";

const app = express();
app.use(cors({ origin: true }));

exports.app = functions.https.onRequest(app);

admin.initializeApp(functions.config().firebase);

const firebaseConfig = {
 apiKey: "AIzaSyBNwlNSysndxhXhvdiIhGbJ0kgjY-_r5Ww",
 authDomain: "futuretube.firebaseapp.com",
 databaseURL: "https://futuretube.firebaseio.com",
 projectId: "futuretube",
 storageBucket: "futuretube.appspot.com",
 messagingSenderId: "402878645637",
 appId: "1:402878645637:web:36218b6026be1dd2a070ec",
 measurementId: "G-QRPMQWC9WZ"
};

firebase.initializeApp(firebaseConfig);


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

app.post("/changePassword", async (req: Request, res: Response) => {
 try {
  const token = req.headers.auth as string;
  const authentication = new FirebaseAuth();
  const userId = await authentication.authenticate(token);

  const changePasswordUseCase = new ChangePasswordUseCase(
   new UserDatabase(),
    new FirebaseAuth()
  );
  const result = await changePasswordUseCase.execute({
   userId,
   newPassword: req.body.newPassord,
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