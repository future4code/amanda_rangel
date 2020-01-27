import {Post} from "../entities/Post";

export interface CreatePostGateway{
  createPost(post: Post): Promise<Post>
}