import * as admin from 'firebase-admin'
import {
  AuthenticateDataSource,
  TokenGeneratorDataSource
} from "../../business/dataSources/auth";
import {User} from "../../business/entities/User";
import firebase from "firebase";

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


export class FirebaseAuthWithToken implements AuthenticateDataSource {
  async authenticate(token: string) {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken.uid
  }
}


