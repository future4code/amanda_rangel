import {
  ChangePasswordDataSource,
  GetUserByEmailDataSource,
  RegisterUserDataSource,
  SignInDataSource
} from "../../business/dataSources/userDataSource";
import {User} from "../../business/entities/User";
import {FirebaseAdminFirestore} from "../FirebaseAdminFirestore";
import admin from "firebase-admin";
import firebase from "firebase";


export class UserDatabase extends FirebaseAdminFirestore implements
  RegisterUserDataSource,
  ChangePasswordDataSource,
  SignInDataSource,
  GetUserByEmailDataSource {

  private static USER_COLLECTION: string = 'users';


  async signIn(email: string, password: string): Promise<any> {
   return await firebase.auth().signInWithEmailAndPassword(email, password)
  }

  async registerUser(user: User): Promise<any> {
    return await this.db.collection(UserDatabase.USER_COLLECTION).doc(user.getId()).set({
      name: user.getName(),
      email: user.getEmail(),
      dateOfBirth: user.getDateOfBirth(),
      picture: user.getPicture(),
    });
  }

  async changePassword(userId: string, newPassword: string): Promise<any> {
    await admin.auth().updateUser(userId, {
      password: newPassword
    });
  }

}


