import admin from "firebase-admin";

export abstract class FirebaseAdminFirestore {
   protected db = admin.firestore();
}