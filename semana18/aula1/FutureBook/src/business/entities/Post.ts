import {User} from "./User";

export class Post {
  constructor(
    private picture: string,
    private description: string,
    private postDate: Date,
    private postType: string,
    private userId: string,
  ) {}

  public getPicture() {
    return this.picture
  }

  public getDescription() {
    return this.description
  }

  public getPostDate() {
    return this.postDate
  }

  public getPostType() {
    return this.postType
  }

  public getUserId() {
    return this.userId
  }

}

