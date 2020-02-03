import {KnexDatabaseConnection} from "../knexconnection/KnexDatabaseConnection";
import {User} from "../../business/entities/User";
import {CreateUserGateway, UserGettersGateway, UserRelationGateway} from "../../business/gateways/userGateway";

export class UserDatabase extends KnexDatabaseConnection implements
  CreateUserGateway,
  UserGettersGateway,
  UserRelationGateway {

 private static TABLE_NAME: string = "f4_users";

  async createUser(user: User) {
    try {
      await this.connection.raw(
        `INSERT INTO ${UserDatabase.TABLE_NAME} (id, name, email, password, type) 
         VALUES(
           "${user.getId()}",
           "${user.getName()}",
           "${user.getEmail()}",
           "${user.getPassword()}",
           "${user.getType()}"
          )`
      );
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    try {
      const result = await this.connection.raw(
        `SELECT * FROM ${UserDatabase.TABLE_NAME} 
         WHERE email='${email}'`
      );
      return result[0].length === 0 ? undefined : this.UserDbModel(result[0][0]);
    }catch (error) {
      throw new Error(error.message)
    }
  }

  async findUser(id: string): Promise<boolean> {
    try {
      const result = await this.connection.raw(
        `SELECT * FROM ${UserDatabase.TABLE_NAME} 
         WHERE id='${id}'`
      );
      const returnedUser = result[0][0];
      return Boolean(returnedUser)
    }catch (error) {
      throw new Error(error.message)
    }
  }

  async toggleUserRelation(followerUserId: string, followedUserId: string): Promise<void> {

    try {
      const verifyIfUsersRelationExists = await this.connection.raw(`
        SELECT * FROM f4_users_relations 
        WHERE follower_id='${followerUserId}' 
        AND followed_id='${followedUserId}'
      `);
      if(!verifyIfUsersRelationExists[0][0]) {
        await this.connection.raw(`
          INSERT INTO f4_users_relations (follower_id, followed_id)
          VALUES ('${followerUserId}', '${followedUserId}')
        `)
      } else {
        await this.connection.raw(`
          DELETE FROM f4_users_relations 
          WHERE follower_id='${followerUserId}' 
          AND followed_id='${followedUserId}'
        `)
      }
    } catch (error) {
      throw new Error(error.message )
    }
  }

  private UserDbModel(dbModel: any): User {
    return new User(
      dbModel.id,
      dbModel.name,
      dbModel.email,
      dbModel.password,
      User.convertUserType(dbModel.type)
    )
  }
}
