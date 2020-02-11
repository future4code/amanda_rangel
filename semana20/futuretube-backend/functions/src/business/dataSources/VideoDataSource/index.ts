import {Video} from "../../entities/Video";

export interface UploadVideoDataSource {
  upload(video: Video): Promise<void>
}

export interface GetUserVideosDataSource {
  getVideos(userId: string): Promise<any>
}

export interface GetAllVideosDataSource {
  getAllVideos(): Promise<any>;
}

export interface GetVideoInfoDataSource {

  getVideoInfo(videoId: string): Promise<object>
}

export interface EditVideoInfoDataSource {
  editVideoInfo(videoId: string, newTitle: string, newDescription: string): Promise<void>
}

export interface DeleteVideoDataSource {
  deleteVideo(videoId: string): Promise<void>
}