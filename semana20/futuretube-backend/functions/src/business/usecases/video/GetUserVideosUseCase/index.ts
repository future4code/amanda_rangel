import {GetUserIdByEmailDataSource} from "../../../dataSources/userDataSource";
import {GetUserVideosDataSource} from "../../../dataSources/VideoDataSource";

export class GetUserVideosUseCase {
  constructor(
    private getUserIdByEmailDataSource: GetUserIdByEmailDataSource,
    private getUserVideosDataSource: GetUserVideosDataSource
  ) {
  }

  async execute(email: string) {
    const userId = await this.getUserIdByEmailDataSource.getUserId(email);
    return await this.getUserVideosDataSource.getVideos(userId);
  }
}

