import {FirebaseAdminFirestore} from "../FirebaseAdminFirestore";
import {
  DeleteVideoDataSource,
  EditVideoInfoDataSource,
  GetAllVideosDataSource,
  GetUserVideosDataSource, GetVideoInfoDataSource,
  UploadVideoDataSource
} from "../../business/dataSources/VideoDataSource";
import {Video} from "../../business/entities/Video";

export class VideoDatabase extends FirebaseAdminFirestore implements
  UploadVideoDataSource,
  GetUserVideosDataSource ,
  GetAllVideosDataSource,
  GetVideoInfoDataSource,
  EditVideoInfoDataSource,
  DeleteVideoDataSource {

  private static VIDEOS_COLLECTION: string = 'videos';

  async upload(video: Video): Promise<any> {
    return await this.db.collection(VideoDatabase.VIDEOS_COLLECTION).doc(video.getId()).set({
      videoId: video.getId(),
      title: video.getTitle(),
      description: video.getDescription(),
      videoUrl: video.getVideoUrl(),
      userId: video.getUserId()
    });
  }


  async getVideos(id: string): Promise<any> {
    const videosRef = this.db.collection(VideoDatabase.VIDEOS_COLLECTION);
    const videosQuery = videosRef.where("userId", "==", id);
    const queryResult = videosQuery.get();
    const snapshot = await queryResult;
    return snapshot.docs.map((doc) => {
      return doc.data();
    });
  }

  async getAllVideos(): Promise<any> {
    const videosRef = this.db.collection(VideoDatabase.VIDEOS_COLLECTION);
    const snapshot = await videosRef.get();
    return snapshot.docs.map(doc => {
      return doc.data()
    });
  }

  async getVideoInfo(videoId: string): Promise<any> {
    const videosRef = this.db.collection(VideoDatabase.VIDEOS_COLLECTION);
    const videosQuery = videosRef.where('videoId', '==', videoId);
    const queryResult = videosQuery.get();
    const snapshot = await queryResult;
      return snapshot.docs.map((doc) => {
        return doc.data()
      })
  }

  async editVideoInfo(videoId: string, newTitle: string, newDescription: string): Promise<void> {
    this.db.collection(VideoDatabase.VIDEOS_COLLECTION).doc(videoId).update({
      title: newTitle,
      description: newDescription
      }
    )
  }

  async deleteVideo(videoId: string): Promise<void> {
    this.db.collection(VideoDatabase.VIDEOS_COLLECTION).doc(videoId).delete();
  }
}


