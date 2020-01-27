import {KnexDatabaseConnection} from "../knexconnection/KnexDatabaseConnection";
import {FeedGateway} from "../../business/gateways/feedGateway";
import {Post} from "../../business/entities/Post";


export class GetFeedDatabase extends KnexDatabaseConnection implements FeedGateway {

  async getPostsForUserFeed(userId: string, postsLimit: number, offset: number) {
    const result = await this.connection.raw(`
      SELECT p.id, p.picture, p.description, p.post_date, p.post_type, p.user_id, u.name as userName
      FROM f4_users_relations ur
      JOIN f4_posts p ON ur.followed_id=p.user_id
      JOIN f4_users u ON ur.followed_id=u.id
      WHERE follower_id='${userId}'
      ORDER BY p.post_date desc
      LIMIT ${postsLimit} OFFSET ${offset}   
    `);
    const posts: PostFeedModel[] = result[0];
    return posts.map(post => ({
      post: new Post(
        post.picture,
        post.description,
        new Date(post.postDate),
        post.postType,
        post.userId),
      userName: post.userName
    }))
  }

  async getPostsByTypeForFeed(userId: string, postType: string, postsLimit: number, offset: number) {

    const result = await this.connection.raw(`
      SELECT p.id, p.picture, p.description, p.post_date, p.post_type, p.user_id, u.name as userName
      FROM f4_users_relations ur
      JOIN f4_posts p ON ur.followed_id=p.user_id
      JOIN f4_users u ON ur.followed_id=u.id
      WHERE follower_id='${userId}' AND p.post_type='${postType}'
      ORDER BY p.post_date desc
      LIMIT ${postsLimit} OFFSET ${offset}   
    `);
    const posts: PostFeedModel[] = result[0];
    return posts.map(post => ({
      post: new Post(
        post.picture,
        post.description,
        new Date(post.postDate),
        post.postType,
        post.userId),
      userName: post.userName,
      postType:post.postType
    }))
  }
}

export interface PostFeedModel {
  picture: string,
  description: string,
  postDate: string,
  postType: string,
  userId: string,
  userName: string
}