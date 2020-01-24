import {CreatePostGateway} from "../../business/gateways/postGateway";
import {KnexDatabaseConnection} from "../knexconnection/KnexDatabaseConnection";
import {Post} from "../../business/entities/Post";
import {getSQLDateFromTSDate} from "../../services/dateconverter/dateConverter";

export class PostDatabase extends KnexDatabaseConnection implements CreatePostGateway {
  async createPost(post: Post): Promise<Post> {
   try {
     const response = await this.connection.raw(`
      INSERT INTO f4_posts (picture, description, post_date, post_type, user_id)
      VALUES ("${post.getPicture()}",
      "${post.getDescription()}",
      "${getSQLDateFromTSDate(post.getPostDate())}",
      "${post.getPostType()}",
      "${post.getUserId()}"
      )`
     );
     return post
   } catch (e) {
     console.log(e);
     throw new Error("Não foi possível concluir a operação")
   }

  }
}