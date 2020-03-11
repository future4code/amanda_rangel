import {IdGeneratorDataSource} from "../../../dataSources/idGeneratorDataSource";
import {UploadVideoDataSource} from "../../../dataSources/VideoDataSource";
import {Video} from "../../../entities/Video";
import {AuthenticateDataSource} from "../../../dataSources/auth";


export class UploadVideoUseCase {
  constructor(
    private uploadVideoDataSource: UploadVideoDataSource,
    private idGeneratorDataSource: IdGeneratorDataSource,
    private authenticateDataSource: AuthenticateDataSource


  ) {}

  async execute(input: UploadVideoInput) {
    this.validateInput(input);
    const videoId = this.idGeneratorDataSource.generateId();
    const userId = await this.authenticateDataSource.authenticate(input.token);
    const newVideo = new Video(
      videoId,
      input.title,
      input.description,
      input.videoUrl,
      userId,
    );
    await this.uploadVideoDataSource.upload(newVideo)
  }

  validateInput(input: UploadVideoInput) {
    if (!(input.title &&
      input.description &&
      input.videoUrl &&
      input.userId)) {
      throw new Error("As informações inseridas estão incompletas")
    }
  }
}

export interface UploadVideoInput {
  videoId: string,
  token: string,
  title: string,
  description: string,
  videoUrl: string,
  userId: string,
}