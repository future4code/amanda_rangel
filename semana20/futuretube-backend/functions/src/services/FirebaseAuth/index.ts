import * as admin from 'firebase-admin'
import {AuthenticateDataSource} from "../../business/dataSources/auth";

export class FirebaseAuth implements AuthenticateDataSource {
  async authenticate(token: string) {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken.uid
  }
}