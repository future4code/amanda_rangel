import * as functions from 'firebase-functions';
import express, {Request, Response} from 'express';
import cors from 'cors'
import admin from "firebase-admin";
import {SignUpUseCase} from "./business/usecases/user/SignupUseCase";
import {UserDatabase} from "./data/UserDatabase";
import {V4IdGenerator} from "./services/V4IdGenerator";
import {ChangePasswordUseCase} from "./business/usecases/user/ChangePasswordUseCase";
import {
 FirebaseAuthGenerateTokenWithUser,
 FirebaseAuthUpdateUser,
 FirebaseAuthWithToken
} from "./services/FirebaseAuth";
import firebase from "firebase";
import {firebaseConfig} from "./services/FirebaseConfig";
import {LoginUseCase} from "./business/usecases/user/LoginUseCase";
import {UploadVideoUseCase} from "./business/usecases/video/UploadVideoUseCase";
import {VideoDatabase} from "./data/VideoDatabase";
import {GetUserVideosUseCase} from "./business/usecases/video/GetUserVideosUseCase";
import {GetAllVideosUseCase} from "./business/usecases/video/GetAllVideosUseCase";
import {GetVideoInfoUseCase} from "./business/usecases/video/GetVideoInfoUseCase";
import {EditVideoInfoUseCase} from "./business/usecases/video/EditVideoInfoUseCase";
import {DeleteVideoUseCase} from "./business/usecases/DeleteVideoUseCase";

const app = express();
app.use(cors({ origin: true }));

exports.app = functions.https.onRequest(app);

admin.initializeApp(functions.config().firebase);
firebase.initializeApp(firebaseConfig);

app.post("/signup", async(req: Request, res: Response) => {

 try {
  const registerUserUseCase = new SignUpUseCase(
    new UserDatabase(),
    new FirebaseAuthUpdateUser(),
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

app.post("/uploadVideo", async (req: Request, res: Response) => {
 try {
  const token = req.headers.auth as string;
  const authentication = new FirebaseAuthWithToken();
  const userId = await authentication.authenticate(token);
  const videoId = new V4IdGenerator().generateId();

  const uploadVideoUseCase = new UploadVideoUseCase(
    new VideoDatabase(),
    new V4IdGenerator(),
    new FirebaseAuthWithToken()
  );
  const result = await uploadVideoUseCase.execute({
     videoId,
     token,
     title: req.body.title,
     description: req.body.description,
     videoUrl: req.body.videoUrl,
     userId
  });
  res.status(200).send({
   result,
   message: "Upload realizado com sucesso"
  });
 } catch (error) {
  res.status(404).send({
   error,
   errorMessage: error.message
  })
 }
});

app.get("/getUserVideos", async (req: Request, res: Response) => {
 try {
  const getUserVideosUseCase = new GetUserVideosUseCase(
    new UserDatabase(),
    new VideoDatabase()
  );
  const result = await getUserVideosUseCase.execute(req.body.email);
  res.status(200).send({
   result
  });
 } catch (error) {
  res.status(404).send({
   error,
   errorMessage: error.message
  })
}
});

app.get("/getAllVideos", async (req: Request, res: Response) => {
 try {
  const getAllVideosUseCase = new GetAllVideosUseCase(
    new VideoDatabase()
  );
  const result = await getAllVideosUseCase.execute();
  res.status(200).send({
   result
  });
 } catch (error) {
  res.status(404).send({
   error,
   errorMessage: error.message
  })
 }
});

app.get('/getVideoInfo', async (req: Request, res: Response) => {
 try {
  const getVideoInfoUseCase =
    new GetVideoInfoUseCase(
     new VideoDatabase(),
     new UserDatabase(),
  );
  const result = await getVideoInfoUseCase.execute(req.body.videoId, req.body.userEmail);
  res.status(200).send({
   result
  });
 } catch (error) {
  res.status(404).send({
   error,
   errorMessage: error.message
  })
 }
});

app.post('/editVideoInfo', async (req: Request, res: Response) => {
 try {
  const token = req.headers.auth as string;
  const authentication = new FirebaseAuthWithToken();
  await authentication.authenticate(token);

  const editVideoInfoUseCase = new EditVideoInfoUseCase(
    new VideoDatabase()
  );
  const result = await editVideoInfoUseCase.execute({
   videoId: req.body.videoId,
   newTitle: req.body.newTitle,
   newDescription: req.body.newDescription
  });
  res.status(200).send({
   result,
   message: "Informações do vídeo editadas com sucesso"
  });
 } catch (error) {
  res.status(404).send({
   error,
   errorMessage: error.message
  })
 }
});

app.post('/deleteVideo', async (req: Request, res: Response) => {
 try {
  const token = req.headers.auth as string;
  const authentication = new FirebaseAuthWithToken();
  await authentication.authenticate(token);

  const deleteVideoUseCase = new DeleteVideoUseCase(
    new VideoDatabase()
  );
  const result = await deleteVideoUseCase.execute(req.body.videoId);
  res.status(200).send({
   result,
   message: "Video deletado com sucesso"
  });
 } catch (error) {
  res.status(404).send({
   error,
   errorMessage: error.message
  })
 }
});

export default app