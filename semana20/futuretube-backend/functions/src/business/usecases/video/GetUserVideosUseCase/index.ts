import {GetUserIdByEmail} from "../../../dataSources/userDataSource";
import {GetUserVideosDataSource} from "../../../dataSources/VideoDataSource";

export class GetUserVideosUseCase {
  constructor(
    private getUserIdByEmailDataSource: GetUserIdByEmail,
    private getUserVideosDataSource: GetUserVideosDataSource
  ) {
  }

  async execute(email: string) {
    const id = await this.getUserIdByEmailDataSource.getUserId(email);
    return await this.getUserVideosDataSource.getVideos(id);
  }
}

