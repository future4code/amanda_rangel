import {Post} from "../entities/Post";

export interface FeedGateway {
  getPostsFeedForUser(userId: string, postLimit:number, offset: number ): Promise<any>
}

export interface FeedOutput {
    post: Post,
    userName: string
}

