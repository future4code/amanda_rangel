import {ChangePasswordDataSource,RegisterUserDataSource} from "../../business/dataSources/userDataSource";
import {User} from "../../business/entities/User";
import {FirebaseAdminFirestore} from "../FirebaseAdminFirestore";
import admin from "firebase-admin";
import * as firebase from 'firebase'


export class UserDatabase extends FirebaseAdminFirestore implements RegisterUserDataSource, ChangePasswordDataSource {

  private static USER_COLLECTION: string = 'users';

  async registerUser(user: User): Promise<any> {
   const authUser = await admin.auth().createUser({
      displayName: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      photoURL: user.getPicture(),
    });
   const collectionUser = await this.db.collection(UserDatabase.USER_COLLECTION).doc(user.getId()).set({
      name: user.getName(),
      email: user.getEmail(),
      dateOfBirth: user.getDateOfBirth(),
      picture: user.getPicture(),
    });

   const customToken = await admin.auth().createCustomToken(user.getId());
   const idToken = await firebase.auth().signInWithCustomToken(customToken);
   console.log("TOKEN: ", idToken);
   const result = await Promise.all([authUser, collectionUser, idToken]);
   console.log("result: ", result)
  }

  async changePassword(userId: string, newPassword: string): Promise<void> {
    admin.auth().updateUser(userId, {
      password: newPassword
    })
  }




  // private UserDbModel(dbModel: any): User {
  //   return new User(
  //     dbModel.id,
  //     dbModel.name,
  //     dbModel.email,
  //     dbModel.dateOfBirth,
  //     dbModel.picture,
  //     dbModel.password    )
  // }
}


