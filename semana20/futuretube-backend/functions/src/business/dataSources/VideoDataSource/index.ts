import {Video} from "../../entities/Video";

export interface UploadVideoDataSource {
  upload(video: Video): Promise<void>
}

export interface GetUserVideosDataSource {
  getVideos(userId: string): Promise<any>
}