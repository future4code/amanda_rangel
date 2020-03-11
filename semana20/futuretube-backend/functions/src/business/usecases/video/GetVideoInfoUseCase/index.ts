import {GetVideoInfoDataSource} from "../../../dataSources/VideoDataSource";
import {GetUserByEmailDataSource} from "../../../dataSources/userDataSource";


export class GetVideoInfoUseCase {
  constructor(
    private getVideoInfoDataSource: GetVideoInfoDataSource,
    private getUserByEmailDataSource: GetUserByEmailDataSource
  ) {}

  async execute(videoId: string, userEmail: string) {
    const videoInfo = await this.getVideoInfoDataSource.getVideoInfo(videoId);
    const userInfo = await this.getUserByEmailDataSource.getUser(userEmail);
    return {
      videoInfo,
      userInfo
    }
  }
}

