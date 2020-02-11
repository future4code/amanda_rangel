import * as admin from 'firebase-admin'
import {AuthenticateDataSource, TokenGeneratorDataSource} from "../../business/dataSources/auth";
import {User} from "../../business/entities/User";
import firebase from "firebase";
import {UpdateUserDataSource} from "../../business/dataSources/userDataSource";

export class FirebaseAuthGenerateTokenWithUser implements TokenGeneratorDataSource {
  async generateToken(input: User): Promise<object> {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(
      input.getEmail(),
      input.getPassword()
    );
      return {
        userCredential
      }
  }
}

export class FirebaseAuthUpdateUser implements UpdateUserDataSource{
  async updateUser(input: User): Promise<any> {
    const userInFirebase = firebase.auth().currentUser;
    return userInFirebase?.updateProfile({
      displayName: input.getName(),
      photoURL: input.getPicture()
    });
  }

}


export class FirebaseAuthWithToken implements AuthenticateDataSource {
  async authenticate(token: string) {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken.uid
  }
}


