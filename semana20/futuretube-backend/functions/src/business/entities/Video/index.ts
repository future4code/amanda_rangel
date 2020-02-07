export class Video {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private videoUrl: string,
    private userId: string,
  ) {}

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string{
    return this.description;
  }

  public getVideoUrl(): string {
    return this.videoUrl;
  }

  public getUserId(): string{
    return this.userId;
  }

}