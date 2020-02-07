import {FirebaseAdminFirestore} from "../FirebaseAdminFirestore";
import {GetUserVideosDataSource, UploadVideoDataSource} from "../../business/dataSources/VideoDataSource";
import {Video} from "../../business/entities/Video";
import {GetUserIdByEmailDataSource} from "../../business/dataSources/userDataSource";
import admin from "firebase-admin";

export class VideoDatabase extends FirebaseAdminFirestore implements
  UploadVideoDataSource,
  GetUserIdByEmailDataSource,
  GetUserVideosDataSource {

  private static VIDEOS_COLLECTION: string = 'videos';

  async upload(video: Video): Promise<any> {
    return await this.db.collection(VideoDatabase.VIDEOS_COLLECTION).doc(video.getId()).set({
      title: video.getTitle(),
      description: video.getDescription(),
      videoUrl: video.getVideoUrl(),
      userId: video.getUserId()
    });
  }

  async getUserId(email: string): Promise<string> {
    const user = await admin.auth().getUserByEmail(email);
    return user.uid
  }

  async getVideos(userId: string): Promise<any> {
    const videosRef = await this.db.collection(VideoDatabase.VIDEOS_COLLECTION);
    const videos = videosRef.where('userId', '==', userId);
    console.log(videos)
  }
}
