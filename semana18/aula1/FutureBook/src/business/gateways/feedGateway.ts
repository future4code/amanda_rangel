import {Post} from "../entities/Post";

export interface FeedGateway {
  getPostsForUserFeed(userId: string, postsLimit:number, offset: number ): Promise<FeedResponseOutput[]>
  getPostsByTypeForFeed(userId: string, postType:string, postsLimit:number, offset: number): Promise<FeedOutputByPostType[]>
}

export interface FeedResponseOutput {
    post: Post,
    userName: string
}

export interface FeedOutputByPostType {
  post: Post,
  userName: string,
  postType: string
}

