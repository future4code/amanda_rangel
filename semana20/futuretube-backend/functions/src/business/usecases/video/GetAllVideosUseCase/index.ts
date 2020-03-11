import {GetAllVideosDataSource} from "../../../dataSources/VideoDataSource";
import {Video} from "../../../entities/Video";

export class GetAllVideosUseCase {
  constructor(
    private getAllVideosDataSource: GetAllVideosDataSource,
  ) {
  }

  async execute(): Promise<Video> {
    return await this.getAllVideosDataSource.getAllVideos();
  }
}

