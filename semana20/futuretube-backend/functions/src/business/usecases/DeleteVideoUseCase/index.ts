import {DeleteVideoDataSource} from "../../dataSources/VideoDataSource";

export class DeleteVideoUseCase {
  constructor(
    private deleteVideoDataSource: DeleteVideoDataSource
  ) {}
  async execute(videoId: string) {
    return this.deleteVideoDataSource.deleteVideo(videoId)
  }
}