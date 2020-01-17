export class Recipe {
  constructor(
      private title: string,
      private description: string,
      private postDate: Date = new Date(),
      private userId: string
  ) {
    this.title = title;
    this.description = description;
    this.postDate = postDate;
    this.userId = userId;
  }

  public getTitle() {
    return this.title
  }

  public getDescription() {
    return this.description
  }

  public getPostDate() {
    return this.postDate
  }
  public getUserId() {
    return this.userId
  }
}