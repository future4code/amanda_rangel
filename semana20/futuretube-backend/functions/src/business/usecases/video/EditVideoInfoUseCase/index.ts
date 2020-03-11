import {EditVideoInfoDataSource} from "../../../dataSources/VideoDataSource";

export class EditVideoInfoUseCase {
  constructor(
    private editVideoInfoDataSource: EditVideoInfoDataSource
  ) {}

  async execute(input: EditVideoInfoInput)  {
    return this.editVideoInfoDataSource.editVideoInfo(
      input.videoId,
      input.newTitle,
      input.newDescription);
  }
}

export interface EditVideoInfoInput {
  videoId: string,
  newTitle: string,
  newDescription:string
}